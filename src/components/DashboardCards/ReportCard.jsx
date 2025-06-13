import React from "react";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { theme } from "../../config/Theme";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { chartData } from "../../data/reportsData"

export const ReportCard = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [activeChart, setActiveChart] = React.useState("customers");

  const handleChartChange = (event, newChart) => {
    if (newChart !== null) {
      setActiveChart(newChart);
    }
  };

  return (
    <Card sx={{ width: isSmallScreen ? "100%" : "60%"  , borderRadius: "12px"}}>
      <CardContent sx={{ flex: 1, p: 3, display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
          <Box>
            <Typography variant="h5" fontWeight={600}>
              Reports
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last 7 days
            </Typography>
          </Box>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>

        <Stack>
          <ToggleButtonGroup
            value={activeChart}
            exclusive
            onChange={handleChartChange}
            aria-label="chart selection"
            fullWidth
            sx={{
              gap: 1,
              mb: 6,
              "& .MuiToggleButtonGroup-grouped": {
                border: "none",
                borderBottom: "3px solid rgb(219, 219, 219)",
                textAlign: 'start',
                "&.Mui-selected": {
                  borderBottom: "4px solid #0F60FF",
                  background: "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(27, 110, 245, 0.1))",
                },
              },
            }}
          >
            {Object.entries({
              customers: { value: "24k", label: "Customers" },
              products: { value: "3.5k", label: "Total Products" },
              stockProducts: { value: "2.5k", label: "Stock Products" },
              outOfStock: { value: "0.5k", label: "Out of Stock" },
              revenue: { value: "250k", label: "Revenue" },
            }).map(([key, { value, label }]) => (
              <ToggleButton
                key={key}
                value={key}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant={isSmallScreen ? "h6" : "h5"} fontWeight="bold">
                  {value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {label}
                </Typography>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Stack>

        <Box sx={{ height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData[activeChart]}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis
                dataKey="name"
                tickLine={false}
                tick={{ fill: theme.palette.text.secondary, fontSize: 14 }}
              />
              <YAxis
                tickFormatter={(value) => `${value}${activeChart === "revenue" ? "k" : "k"}`}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                formatter={(value) => [`${value}${activeChart === "revenue" ? "k" : "k"}`, activeChart]}
                labelFormatter={(label) => `Day: ${label}`}
              />
              <Line
                dataKey="value"
                stroke="#0F60FF"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};