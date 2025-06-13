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
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

import { theme } from "../../config/Theme";

const Discountdata = [
  { name: "MON", discount: 5 },
  { name: "TUE", discount: 2.2 },
  { name: "WED", discount: 4 },
  { name: "THU", discount: 2.5 },
];

export const DiscountCard = () => {
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
            <Typography fontSize={'18px'} fontWeight={'bold'}>
              Discounted Amount
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last 4 days
            </Typography>
          </Stack>

          <Stack direction="row" spacing={4} mb={2}>
            <Typography variant="h4" fontWeight={700}>
              16.5K
            </Typography>
          </Stack>

          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ color: theme.palette.error.main }}
          >
            <ArrowUpward fontSize="small" color="error" />
            <Typography variant="body2" color="error" fontWeight={600}>
              -2%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              vs last 4 days
            </Typography>
          </Box>
        </Box>

        <Box width={"100%"}>
          <Box sx={{ height: 200}}>
            <ResponsiveContainer width="100%" height="80%">
              <AreaChart
                data={Discountdata}
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="discountGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor={theme.palette.error.main}
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="100%"
                      stopColor={theme.palette.error.main}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <Tooltip
                  formatter={(value) => [`${value}K amount`]}
                  labelFormatter={(label) => `Day: ${label + 1}`}
                />
                <Area
                  type="monotone"
                  dataKey="discount"
                  isAnimationActive={true}
                  stroke={theme.palette.error.main}
                  strokeWidth={3}
                  fill="url(#discountGradient)"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
