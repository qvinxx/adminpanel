import {
  Box,
  Button,
  Card,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const LastCommentsData = Array(6).fill({
  id: "#5089",
  issuedDate: "31 March 2023",
  comment: "Good!",
  action: "View Detail",
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
}));

const StyledHeaderTableCell = styled(TableCell)(({ theme }) => ({
  color: "#8B909A",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: "#0F60FF",
}));

export const LastCommentsCard = () => {
  return (
    <Card
      sx={{
        flex: 1,
        p: 4,
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
      }}
    >
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h5" fontWeight={600}>
          Last Comments
        </Typography>
        <Button>View All</Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead
            sx={{
              bgcolor: "#F8F9FA",
            }}
          >
            <TableRow>
              <StyledHeaderTableCell>ID</StyledHeaderTableCell>
              <StyledHeaderTableCell>ISSUED DATA</StyledHeaderTableCell>
              <StyledHeaderTableCell>COMMENT</StyledHeaderTableCell>
              <StyledHeaderTableCell>ACTIONS</StyledHeaderTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {LastCommentsData.map((row, index) => (
              <TableRow key={index}>
                <StyledTableCell>
                  <StyledLink href={row.actionLink || "#"}>{row.id}</StyledLink>
                </StyledTableCell>
                <StyledTableCell>{row.issuedDate}</StyledTableCell>
                <StyledTableCell>{row.comment}</StyledTableCell>
                <StyledTableCell>
                  <StyledLink href={row.actionLink || "#"}>
                    {row.actionLabel || "View Detail"}
                  </StyledLink>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};
