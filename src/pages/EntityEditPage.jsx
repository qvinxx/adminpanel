import React, { useEffect, useState, useCallback } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  MenuItem,
  useMediaQuery,
  useTheme,
  InputAdornment,
  Card,
  CardMedia,
  IconButton,
  Grid,
} from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function EntityEditPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(700));

  const {
    storageKey,
    title = "Edit Entity",
    idKey = "id",
    redirectTo = "/",
    fields = [],
  } = location.state || {};

  const [entityData, setEntityData] = useState({});
  const [imageFiles, setImageFiles] = useState({});

  useEffect(() => {
    if (!storageKey) {
      alert("No storageKey provided in navigation state.");
      navigate("/");
      return;
    }

    const stored = JSON.parse(localStorage.getItem(storageKey)) || [];
    const item = stored.find((entry) => String(entry[idKey]) === id);
    if (!item) {
      alert("Item not found.");
      navigate(redirectTo);
      return;
    }
    setEntityData(item);
  }, [storageKey, id, idKey, navigate, redirectTo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntityData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (fieldName, e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setEntityData((prev) => ({
        ...prev,
        [fieldName]: fieldName.includes("images") 
          ? [...(prev[fieldName] || []), reader.result]
          : reader.result
      }));
      setImageFiles((prev) => ({
        ...prev,
        [fieldName]: file
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = (fieldName, index = null) => {
    if (index !== null && Array.isArray(entityData[fieldName])) {
      // For image arrays
      const updatedImages = entityData[fieldName].filter((_, i) => i !== index);
      setEntityData((prev) => ({
        ...prev,
        [fieldName]: updatedImages
      }));
    } else {
      // For single images
      setEntityData((prev) => ({
        ...prev,
        [fieldName]: ""
      }));
      setImageFiles((prev) => ({
        ...prev,
        [fieldName]: null
      }));
    }
  };

  const handleSave = () => {
    const stored = JSON.parse(localStorage.getItem(storageKey)) || [];
    const updated = stored.map((entry) =>
      String(entry[idKey]) === id ? entityData : entry
    );
    localStorage.setItem(storageKey, JSON.stringify(updated));
    navigate(redirectTo);
  };

  const renderImageField = (field) => {
    const value = entityData[field.name];
    
    if (field.type === "images" && Array.isArray(value)) {
      return (
        <Grid container spacing={1}>
          {value.map((img, index) => (
            <Grid item key={index}>
              <Card sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  image={img}
                  alt={`${field.label} ${index}`}
                  sx={{ width: 100, height: 100, objectFit: "cover" }}
                />
                <IconButton
                  size="small"
                  onClick={() => handleRemoveImage(field.name, index)}
                  sx={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.7)",
                    },
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Card>
            </Grid>
          ))}
          <Grid item>
            <Button
              component="label"
              variant="outlined"
              startIcon={<CloudUploadIcon />}
              sx={{ height: 100, width: 100 }}
            >
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => handleImageUpload(field.name, e)}
              />
            </Button>
          </Grid>
        </Grid>
      );
    }

    if (field.type === "image") {
      return (
        <Box sx={{ position: "relative", width: "fit-content" }}>
          {value ? (
            <>
              <CardMedia
                component="img"
                image={value}
                alt={field.label}
                sx={{ width: 200, height: 200, objectFit: "contain" }}
              />
              <IconButton
                size="small"
                onClick={() => handleRemoveImage(field.name)}
                sx={{
                  position: "absolute",
                  top: 4,
                  right: 4,
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.7)",
                  },
                }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </>
          ) : (
            <Button
              component="label"
              variant="outlined"
              startIcon={<CloudUploadIcon />}
            >
              Upload {field.label}
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => handleImageUpload(field.name, e)}
              />
            </Button>
          )}
        </Box>
      );
    }

    return null;
  };

  return (
    <Box sx={{ px: isMobile ? 1 : 3, py: 2 }}>
      <Typography variant="h4" color="primary" mb={2}>
        {title}
      </Typography>
      <Paper sx={{ p: 3, borderRadius: 3, maxWidth: 600 }}>
        {fields.map(({ name, label, type = "text", options, adornment }) => (
          <Box key={name} mb={3}>
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              {label}
            </Typography>
            
            {type === "image" || type === "images" ? (
              renderImageField({ name, label, type })
            ) : (
              <TextField
                fullWidth
                name={name}
                value={entityData[name] || ""}
                onChange={handleChange}
                variant="outlined"
                select={type === "select"}
                InputProps={
                  adornment
                    ? {
                        startAdornment: (
                          <InputAdornment position="start">
                            {adornment}
                          </InputAdornment>
                        ),
                      }
                    : undefined
                }
                size={isMobile ? "small" : "medium"}
              >
                {type === "select" &&
                  options.map((opt) => (
                    <MenuItem key={opt} value={opt}>
                      {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </MenuItem>
                  ))}
              </TextField>
            )}
          </Box>
        ))}
        <Button
          variant="contained"
          fullWidth
          onClick={handleSave}
          sx={{ mt: 2, height: 48, fontWeight: "bold", textTransform: "none" }}
        >
          Save
        </Button>
      </Paper>
    </Box>
  );
}