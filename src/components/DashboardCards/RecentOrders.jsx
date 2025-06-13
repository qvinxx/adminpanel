import {
  Box,
  Card,
  CardContent,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { theme } from "../../config/Theme";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
}));

const StyledHeaderTableCell = styled(TableCell)(({ theme }) => ({
  color: "#8B909A",
}));

const StatusIndicator = styled(Box)(({ status, theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  color: status === "Completed" ? "#1EB564" : "#FFC600",
}));

const RecentOrdersData = [
  {
    ID: "6548",
    customer: "Joseph Wheeler",
    status: "Pending",
    price: "$999.29",
  },
  {
    ID: "6548",
    customer: "Joseph Wheeler",
    status: "Completed",
    price: "$72.40",
  },
  {
    ID: "6548",
    customer: "Joseph Wheeler",
    status: "Pending",
    price: "$90.90",
  },
  {
    ID: "6548",
    customer: "Joseph Wheeler",
    status: "Completed",
    price: "$249.99",
  },
  {
    ID: "6548",
    customer: "Joseph Wheeler",
    status: "Pending",
    price: "$79.40",
  },
  {
    ID: "6548",
    customer: "Joseph Wheeler",
    status: "Pending",
    price: "$999.29",
  },
];

export const RecentOrders = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card sx={{ width: isSmallScreen ? "100%" : "60%", borderRadius: "12px" }}>
      <CardContent
        sx={{ flex: 1, p: 3, display: "flex", flexDirection: "column" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Typography variant="h5" fontWeight={600}>
            Best Selling Products
          </Typography>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <TableContainer>
          <Table>
            <TableHead
              sx={{
                bgcolor: "#F8F9FA",
              }}
            >
              <TableRow>
                <StyledHeaderTableCell>PRODUCT</StyledHeaderTableCell>
                <StyledHeaderTableCell>TOTAL ORDER</StyledHeaderTableCell>
                <StyledHeaderTableCell>STATUS</StyledHeaderTableCell>
                <StyledHeaderTableCell>PRICE</StyledHeaderTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {RecentOrdersData.map((row, index) => (
                <TableRow key={index}>
                  <StyledTableCell>#{row.ID}</StyledTableCell>
                  <StyledTableCell>{row.customer}</StyledTableCell>
                  <StyledTableCell>
                    <StatusIndicator status={row.status}>
                      {row.status}
                    </StatusIndicator>
                  </StyledTableCell>
                  <StyledTableCell>{row.price}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};
