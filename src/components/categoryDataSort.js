import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Folder as FolderIcon,
  Category as CategoryIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';

import { categoryRows, categoryHandlers } from '../data/categoryData';

const CategoryAccordion = () => {
  const groupedCategories = categoryRows.reduce((acc, category) => {
    const parent = category.parent === '-' ? 'Root' : category.parent;
    if (!acc[parent]) {
      acc[parent] = [];
    }
    acc[parent].push(category);
    return acc;
  }, {});

  const mainCategories = categoryRows.filter(cat => cat.parent === '-');

  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {mainCategories.map((mainCat) => (
        <Accordion
          key={`panel-${mainCat.id}`}
          expanded={expanded === `panel-${mainCat.id}`}
          onChange={handleChange(`panel-${mainCat.id}`)}
          sx={{ mb: 1 }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <ListItemIcon>
                <FolderIcon color="primary" />
              </ListItemIcon>
              <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                {mainCat.name}
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <Typography variant="caption" sx={{ mr: 2 }}>
                  {mainCat.products} products
                </Typography>
                <Typography variant="caption">
                  {mainCat.status === 'active' ? '✅' : '⚠️'}
                </Typography>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 0, pb: 0 }}>
            <List dense>
              {groupedCategories[mainCat.name]?.map((childCat) => (
                <ListItem 
                  key={childCat.id} 
                  secondaryAction={
                    <Box sx={{ display: 'flex' }}>
                      <Tooltip title="View">
                        <IconButton onClick={() => categoryHandlers.handleView(childCat.id)}>
                          <VisibilityIcon fontSize="small" color="info" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit">
                        <IconButton onClick={() => categoryHandlers.handleEdit(childCat.id)}>
                          <EditIcon fontSize="small" color="primary" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton onClick={() => categoryHandlers.handleDelete(childCat.id)}>
                          <DeleteIcon fontSize="small" color="error" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  }
                >
                  <ListItemIcon>
                    <CategoryIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={childCat.name} 
                    secondary={`${childCat.products} products • ${childCat.status}`}
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default CategoryAccordion;