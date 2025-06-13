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
  color: status === "Stock" ? "#1EB564" : "#D02626",
  "&::before": {
    content: '""',
    display: "inline-block",
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: status === "Stock" ? "#1EB564" : "#D02626",
    marginRight: 8,
  },
}));

const BestProductsData = [
  {
    product: "Apple iPhone 13",
    totalOrder: 506,
    status: "Stock",
    price: "$999.29",
  },
  {
    product: "Nike Air Jordan",
    totalOrder: 506,
    status: "Stock",
    price: "$72.40",
  },
  {
    product: "Beats Studio 2",
    totalOrder: 506,
    status: "Stock",
    price: "$99.90",
  },
  {
    product: "Apple Watch Series 7",
    totalOrder: 506,
    status: "Out",
    price: "$249.99",
  },
  {
    product: "Amazon Echo Dot",
    totalOrder: 506,
    status: "Stock",
    price: "$79.40",
  },
];

export const BestSellingProducts = () => {
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
              {BestProductsData.map((row, index) => (
                <TableRow key={index}>
                  <StyledTableCell>{row.product}</StyledTableCell>
                  <StyledTableCell>{row.totalOrder}</StyledTableCell>
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
