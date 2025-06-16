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

const ProfitData = [
  { name: "MON", profit: 3 },
  { name: "TUE", profit: 5 },
  { name: "WED", profit: 4 },
  { name: "THU", profit: 6 },
];

export const ProfitCard = () => {

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
              Total Profit
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last 4 days
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} mb={3} alignItems={"baseline"}>
            <Typography variant="h4" fontWeight={700}>
              50K
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
              12%
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
                data={ProfitData}
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="profitGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#1EB564" stopOpacity={0.15} />
                    <stop offset="100%" stopColor="#1EB564" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Tooltip
                  formatter={(value) => [
                    `$${value}K profit`,
                    value === ProfitData.profit,
                  ]}
                  labelFormatter={(label) => `Day: ${label + 1}`}
                />
                <Area
                  type="monotone"
                  dataKey="profit"
                  stackId="1"
                  stroke="#1EB564"
                  strokeWidth={3}
                  fill="url(#profitGradient)"
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
