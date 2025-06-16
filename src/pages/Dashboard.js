import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { SalesCostCard } from "../components/DashboardCards/SalesCostCard";
import { UsersCard } from "../components/DashboardCards/UsersCard";
import { theme } from "../config/Theme";
import { OrdersCard } from "../components/DashboardCards/OrdersCard";
import { ProfitCard } from "../components/DashboardCards/ProfitCard";
import { DiscountCard } from "../components/DashboardCards/DiscountCard";
import { ReportCard } from "../components/DashboardCards/ReportCard";
import { LastUsersCard } from "../components/DashboardCards/LastUsersChart/LastUsers";
import { TopCategoriesCard } from "../components/DashboardCards/TopCategories";
import { LastCommentsCard } from "../components/DashboardCards/LastComments";
import { BestSellingProducts } from "../components/DashboardCards/BestSellingProducts";
import { TrendingProducts } from "../components/DashboardCards/TrendingProducts";
import { TodayOrders } from "../components/DashboardCards/TodayOrder";
import { RecentOrders } from "../components/DashboardCards/RecentOrders";

export default function DashboardPage() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Typography variant="h4" fontWeight={"bold"}>
        Dashboard
      </Typography>
      <Box
        display={"flex"}
        flexDirection={isSmallScreen ? "column" : "row"}
        gap={2}
      >
        <SalesCostCard />
        <UsersCard />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: 2,
        }}
      >
        <OrdersCard />
        <ProfitCard />
        <DiscountCard />
      </Box>
      <Box
        display={"flex"}
        flexDirection={isSmallScreen ? "column" : "row"}
        gap={2}
      >
        <ReportCard />
        <LastUsersCard />
      </Box>
      <Box
        display={"flex"}
        flexDirection={isSmallScreen ? "column" : "row"}
        gap={2}
      >
        <TopCategoriesCard />
        <LastCommentsCard />
      </Box>
      <Box
        display={"flex"}
        flexDirection={isSmallScreen ? "column" : "row"}
        gap={2}
      >
        <BestSellingProducts/>
        <TrendingProducts/>
      </Box>
      <Box
        display={"flex"}
        flexDirection={isSmallScreen ? "column" : "row"}
        gap={2}
      >
        <TodayOrders/>
        <RecentOrders/>
      </Box>
    </Box>
  );
}
