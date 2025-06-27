import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
  Grid,
  Avatar,
} from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function EntityViewPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(700));

  const {
    storageKey,
    title = "View Entity",
    idKey = "id",
    fields = [],
    redirectTo = "/",
  } = location.state || {};

  const [entityData, setEntityData] = useState(null);

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

  if (!entityData) return null;

  const renderFieldValue = (field, value) => {
    if (field.type === "images" && Array.isArray(value)) {
      if (value.length === 0) {
        return <Typography variant="body2" color="textSecondary">No images</Typography>;
      }
      
      return (
        <Grid container spacing={1}>
          {value.map((img, index) => (
            <Grid item key={index}>
              <img 
                src={img} 
                alt={`Product ${index}`}
                style={{ 
                  width: 100, 
                  height: 100, 
                  objectFit: 'cover',
                  borderRadius: theme.shape.borderRadius
                }}
                onError={(e) => {
                  e.target.src = '/images/placeholder.jpg';
                }}
              />
            </Grid>
          ))}
        </Grid>
      );
    }
    
    return value !== undefined && value !== "" ? value.toString() : "-";
  };

  return (
    <Box sx={{ px: isMobile ? 1 : 3, py: 2 }}>
      <Typography variant="h4" color="primary" mb={2}>
        {title}
      </Typography>
      <Paper sx={{ p: 3, borderRadius: 3, maxWidth: 600 }}>
        {fields.map((field) => (
          <Box key={field.name} mb={2}>
            <Typography variant="subtitle2" color="textSecondary">
              {field.label}
            </Typography>
            <Typography variant="body1">
              {renderFieldValue(field, entityData[field.name])}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Box>
  );
}