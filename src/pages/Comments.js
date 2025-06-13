import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  TextField,
  InputAdornment,
  Icon,
  Paper,
} from "@mui/material";
import {
  Search as SearchIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import React, { useState } from "react";
import AddButtonDialog from "../components/AddCommentDialog";
import { commentRows, useCommentColumns } from "../data/commentsData";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

export default function CommentsPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDialog, setOpenDialog] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const columns = useCommentColumns();

  const filteredRows = commentRows.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const handleAddComment = () => {
    setOpenDialog(true);
  };

  return (
    <Box
      sx={{
        px: isMobile ? 1 : 3,
        py: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h4" color="primary">
          Comments
        </Typography>

        <Icon
          onClick={handleAddComment}
          color="primary"
          fontSize="large"
          sx={{
            cursor: "pointer",
          }}
        >
          add_circle
        </Icon>
      </Box>

      <Paper
        elevation={3}
        sx={{
          flex: 1,
          width: "100%",
          borderRadius: 2,
          p: isMobile ? 1 : 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          overflow: "hidden",
        }}
      >
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          alignItems={isMobile ? "stretch" : "center"}
          gap={2}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder={isMobile ? "Search..." : "Search..."}
            size={isMobile ? "small" : "medium"}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize={isMobile ? "small" : "medium"} />
                </InputAdornment>
              ),
              sx: {
                borderRadius: 2,
                backgroundColor: "background.paper",
              },
            }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            width: "100%",
            overflow: "hidden",
            position: "relative",
            minHeight: 300,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflow: "auto",
              "& .mobile-header": {
                fontSize: "0.75rem",
                padding: "4px 8px",
              },
              "& .mobile-cell": {
                fontSize: "0.875rem",
                padding: "4px 8px",
              },
            }}
          >
            <DataGrid
              rows={filteredRows}
              columns={columns}
              getRowHeight={() => null}
              groupingColDef={{
                headerName: "Hierarchy",
                width: 200,
              }}
              sx={{
                "& .MuiDataGrid-cell": {
                  py: isMobile ? 0.5 : 1,
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: theme.palette.grey[100],
                },
                "& .MuiDataGrid-virtualScroller": {
                  minHeight: 200,
                },
              }}
              checkboxSelection={!isMobile}
              hideFooterSelectedRowCount
              disableColumnMenu
              density={isMobile ? "compact" : "standard"}
              disableRowSelectionOnClick
              autoHeight={false}
            />
          </Box>
        </Box>
      </Paper>

      <AddButtonDialog open={openDialog} onClose={() => setOpenDialog(false)} />
    </Box>
  );
}
