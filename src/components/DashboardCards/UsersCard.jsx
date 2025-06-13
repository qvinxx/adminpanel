import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import { theme } from "../../config/Theme";

const Usersdata = [
  { name: "MON", Users: 5000 },
  { name: "TUE", Users: 4000 },
  { name: "WED", Users: 2000 },
  { name: "THU", Users: 3500 },
  { name: "FRI", Users: 4000 },
  { name: "SAT", Users: 3500 },
  { name: "SUN", Users: 3000 },
];

export const UsersCard = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      sx={{
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
        height: "100%",
        width: isSmallScreen ? "100%" : "40%",
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
              Sessions
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last 7 days
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
            <ArrowDownward fontSize="small" color="error" />
            <Typography variant="body2" color="error" fontWeight={600}>
              -3%
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
                data={Usersdata}
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="usersGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor={theme.palette.error.main}
                      stopOpacity={0.35}
                    />
                    <stop
                      offset="95%"
                      stopColor={theme.palette.error.main}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <Tooltip
                  formatter={(value) => [`${value} Users`, "Users"]}
                  labelFormatter={(label) => `Day: ${label + 1}`}
                />
                <Area
                  type="monotone"
                  dataKey="Users"
                  isAnimationActive={true}
                  stroke={theme.palette.error.main}
                  strokeWidth={3}
                  fill="url(#usersGradient)"
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
