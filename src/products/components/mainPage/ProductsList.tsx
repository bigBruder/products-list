import React, { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Product from "../../../types.ts";
import { useTypedSelector } from "../../../hooks/useTypedSelector.ts";
import { useActions } from "../../../hooks/useActions.ts";
// import { fetchProducts } from "../../products.action.ts";

export default function ProductsList() {
  const { productsList, error } = useTypedSelector((state) => state.products);
  const { fetchProducts } = useActions();
  useEffect(() => {
    fetchProducts();
  }, []);

  if (error) {
    return alert(error);
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productsList.map((product: Product) => (
            <TableRow
              key={product.id}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.id}
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.author}</TableCell>
              <TableCell>{product.year}</TableCell>
              <TableCell>{product.rating}</TableCell>
              <TableCell>{product.price}</TableCell>
              <Checkbox
              // color="default"
              />
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
