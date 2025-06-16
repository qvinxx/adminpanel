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
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { theme } from "../../config/Theme";

const Ordersdata = [
  { name: "MON", orders: 500 },
  { name: "TUE", orders: 1500 },
  { name: "WED", orders: 1000 },
  { name: "THU", orders: 2500 },
];

export const OrdersCard = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      sx={{
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
        height: "100%",
      }}
    >
      <CardContent
        sx={{
          flex: 1,
          p: 3,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box>
          <Stack spacing={0.5} mb={4}>
            <Typography variant="subtitle1" fontWeight={600}>
              Total Orders
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last 4 days
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} mb={3} alignItems={"baseline"}>
            <Typography variant="h4" fontWeight={700}>
              5.5K
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
              6%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              vs last 4 days
            </Typography>
          </Box>
        </Box>
        <Box width={"100%"}>
          <Box sx={{ height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={Ordersdata}
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="ordersGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#1EB564" stopOpacity={0.1} />
                    <stop offset="100%" stopColor="#1EB564" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Tooltip
                  formatter={(value) => [
                    `${value} orders`,
                    value === Ordersdata.orders,
                  ]}
                  labelFormatter={(label) => `Day: ${label + 1}`}
                />
                <Area
                  type="monotone"
                  dataKey="orders"
                  stackId="1"
                  stroke="#1EB564"
                  strokeWidth={3}
                  fill="url(#ordersGradient)"
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
