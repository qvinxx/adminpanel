import {
  Box,
  Card,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { theme } from "../../config/Theme";
import { ArrowUpward } from "@mui/icons-material";
import { Line, LineChart, ResponsiveContainer, XAxis } from "recharts";

const data = [
  {
    name: "12am",
    order: 2400,
  },
  {
    name: "4am",
    order: 1398,
  },
  {
    name: "8am",
    order: 9800,
  },
  {
    name: "12pm",
    order: 3908,
  },
  {
    name: "16pm",
    order: 4800,
  },
  {
    name: "20pm",
    order: 3800,
  },
  {
    name: "23pm",
    order: 4300,
  },
];

export const TodayOrders = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      elevation={1}
      sx={{
        p: 4,
        borderRadius: "16px",
        height: "100%",
        width: isSmallScreen ? "100%" : "40%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 1,
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight={600}>
            Today Order
          </Typography>
        </Box>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Box
        display="flex"
        alignItems="baseline"
        justifyContent={"space-between"}
      >
        <Stack direction="row" spacing={4} mb={2}>
          <Typography variant="h4" fontWeight={700}>
            16.5K
          </Typography>
        </Stack>

        <Box
          display="flex"
          alignItems="center"
          gap={1}
          sx={{ color: "#1EB564" }}
        >
          <ArrowUpward fontSize="small" />
          <Typography variant="body2" color="#1EB564" fontWeight={600}>
            6%
          </Typography>
          <Typography variant="body2" color="text.secondary">
            vs last day
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" color="text.secondary" marginBottom={2}>
        Orders Over Time
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart width={200} height={"300px"} data={data}>
          <XAxis
            dataKey="name"
            interval={0}
            padding={{ left: 20, right: 20 }}
            tickLine={false}
          />
          <Line
            type="monotone"
            dot={false}
            strokeWidth={3}
            dataKey="order"
            stroke="#0F60FF"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
