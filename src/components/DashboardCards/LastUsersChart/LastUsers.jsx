import {
  Avatar,
  Box,
  Card,
  Slider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../../../config/Theme";
import CompactBarChart, { UsersActivityData } from "./CompactBarChart";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const LastUsersCard = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
      <Typography fontSize={"18px"} fontWeight={600}>
        Users in last 30 minutes
      </Typography>
      <Typography fontSize={"32px"} fontWeight={"bold"}>
        16.5K
      </Typography>
      <Typography color="text.secondary">Users per minute</Typography>
      <CompactBarChart />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          mt: 1,
        }}
      >
        <Typography fontSize={"18px"} fontWeight={600}>
          Sales by Country
        </Typography>
        <Typography fontSize={"18px"} fontWeight={600}>
          Sales
        </Typography>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <Stack
          direction={"row"}
          spacing={1.5}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Avatar alt="USA" />
          <Box>
            <Typography fontSize={"18px"} fontWeight={"bold"}>
              30k
            </Typography>
            <Typography color="text.secondary">United States</Typography>
          </Box>
          <Slider
            defaultValue={55}
            disabled
            sx={{
              width: 178,
              height: "6px",
              color: "success.main",
              "& .MuiSlider-rail": {
                bgcolor: "#B1A9FC",
              },
              "& .MuiSlider-track": {
                bgcolor: "#0F60FF",
              },
              "& .MuiSlider-thumb": {
                display: "none",
              },
            }}
          />
          <Stack flex={1} flexDirection={"row"} alignItems={"center"}>
            <KeyboardArrowUpIcon
              sx={{
                color: "#28C76F",
              }}
            />
            <Typography variant="h7" color="#28C76F">
              25.8%
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          spacing={1.5}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Avatar alt="BR" />
          <Box minWidth={98}>
            <Typography fontSize={"18px"} fontWeight={"bold"}>
              26k
            </Typography>
            <Typography color="text.secondary">Brazil</Typography>
          </Box>
          <Slider
            defaultValue={40}
            disabled
            sx={{
              width: 178,
              height: "6px",
              color: "success.main",
              "& .MuiSlider-rail": {
                bgcolor: "#B1A9FC",
              },
              "& .MuiSlider-track": {
                bgcolor: "#0F60FF",
              },
              "& .MuiSlider-thumb": {
                display: "none",
              },
            }}
          />
          <Stack flex={1} flexDirection={"row"} alignItems={"center"}>
            <KeyboardArrowDownIcon
              sx={{
                color: "#EA5455",
              }}
            />
            <Typography variant="h7" color="#EA5455">
              16.2%
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          spacing={1.5}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Avatar alt="INDIA" />
          <Box minWidth={98}>
            <Typography fontSize={"18px"} fontWeight={"bold"}>
              22k
            </Typography>
            <Typography color="text.secondary">India</Typography>
          </Box>
          <Slider
            defaultValue={30}
            disabled
            sx={{
              width: 178,
              height: "6px",
              color: "success.main",
              "& .MuiSlider-rail": {
                bgcolor: "#B1A9FC",
              },
              "& .MuiSlider-track": {
                bgcolor: "#0F60FF",
              },
              "& .MuiSlider-thumb": {
                display: "none",
              },
            }}
          />
          <Stack flex={1} flexDirection={"row"} alignItems={"center"}>
            <KeyboardArrowUpIcon
              sx={{
                color: "#28C76F",
              }}
            />
            <Typography variant="h7" color="#28C76F">
              12.3%
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          spacing={1.5}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Avatar alt="USA" />
          <Box minWidth={98}> 
            <Typography fontSize={"18px"} fontWeight={"bold"}>
              17k
            </Typography>
            <Typography color="text.secondary">Australia</Typography>
          </Box>
          <Slider
            defaultValue={20}
            disabled
            sx={{
              width: 178,
              height: "6px",
              color: "success.main",
              "& .MuiSlider-rail": {
                bgcolor: "#B1A9FC",
              },
              "& .MuiSlider-track": {
                bgcolor: "#0F60FF",
              },
              "& .MuiSlider-thumb": {
                display: "none",
              },
            }}
          />
          <Stack flex={1} flexDirection={"row"} alignItems={"center"}>
            <KeyboardArrowDownIcon
              sx={{
                color: "#EA5455",
              }}
            />
            <Typography variant="h7" color="#EA5455">
              11.9%
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
};
