import {
  Box,
  Card,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../../config/Theme";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Fashion", value: 400 },
  { name: "Electronics", value: 300 },
  { name: "Home & Garden", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontWeight={"bold"}
      fontSize={20}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const TopCategoriesCard = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      elevation={1}
      sx={{
        p: 4,
        borderRadius: "16px",
        height: "100%",
        width: isSmallScreen ? "100%" : "35%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2,
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight={600}>
            Top Selling Category
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total 10.4k Visitors
          </Typography>
        </Box>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
      <ResponsiveContainer height={412}>
        <PieChart >
          <Pie
            data={data}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend verticalAlign="top" height={36}/>
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};
