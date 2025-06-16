import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { theme } from "../../config/Theme";

const Salesdata = [
  { name: "MON", sales: 25, costs: 12 },
  { name: "TUE", sales: 30, costs: 15 },
  { name: "WED", sales: 55, costs: 35 },
  { name: "THU", sales: 70, costs: 45 },
  { name: "FRI", sales: 60, costs: 40 },
  { name: "SAT", sales: 45, costs: 30 },
  { name: "SUN", sales: 30, costs: 20 },
];

export const SalesCostCard = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      sx={{
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
        height: "100%",
        width: isSmallScreen ? "100%" : "60%",
      }}
    >
      <CardContent
        sx={{
          flex: 1,
          p: 3,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Box>
          <Stack spacing={0.5} mb={4}>
            <Typography variant="subtitle1" fontWeight={600}>
              Total Sales & Costs
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last 7 days
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} mb={3} alignItems={"baseline"}>
            <Typography variant="h4" fontWeight={700}>
              $350K
            </Typography>
            <Typography variant="h6" color={"#0FB7FF"} fontWeight={700}>
              $235K
            </Typography>
          </Stack>

          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ color: theme.palette.success.main }}
          >
            <ArrowUpward fontSize="small" />
            <Typography variant="body2" fontWeight={600}>
              8.56K
            </Typography>
            <Typography variant="body2" color="text.secondary">
              vs last 7 days
            </Typography>
          </Box>
        </Box>
        <Box width={"100%"}>
          <Box sx={{ height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={Salesdata}
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="salesGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgba(34, 41, 144, 1)"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="100%"
                      stopColor="rgba(34, 41, 144, 1)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient
                    id="costsGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgba(27, 110, 245, 1)"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="100%"
                      stopColor="rgba(27, 110, 245, 1)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <Legend
                  iconType="circle"
                  wrapperStyle={{
                    top: 0,
                    left: 10,
                    display: "flex",
                  }}
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
                  interval={0}
                  padding={{ left: 10, right: 10 }}
                />
                <Tooltip
                  formatter={(value) => [
                    `$${value}K`,
                    value === Salesdata.sales ? "Sales" : "Costs",
                  ]}
                  labelFormatter={(label) => `Day: ${label}`}
                />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stackId="1"
                  stroke="#222990"
                  strokeWidth={3}
                  fill="url(#salesGradient)"
                  fillOpacity={1}
                />
                <Area
                  type="monotone"
                  dataKey="costs"
                  stackId="2"
                  stroke={theme.palette.secondary.main}
                  strokeWidth={3}
                  fill="url(#costsGradient)"
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
