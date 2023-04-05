import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import ProductsList from "./ProductsList.tsx";
import SearchProduct from "./SearchProduct.tsx";
import styled from "styled-components";

const AddButton = styled((props) => <Button variant="contained" {...props} />)`
  margin: "50px 110px 50px 0",
  height: "50px",
  width: "200px";
  text-decoration: "none",
`;

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    title: {
      margin: "50px 10vw 0 25vw",
      color: "#ffffff",
    },
    link: {
      textDecoration: "none",
    },
    stack: {
      // display: "flex",
      // justifyContent: "space-between",
    },
  });
});

const MainPage = () => {
  console.log(styled);
  const { title, link, stack } = useStyles();
  return (
    <>
      <Typography
        style={{ margin: "50px 0 0 20vw" }}
        className={title}
        variant="h2"
        gutterBottom>
        Products list
      </Typography>
      <Stack spacing={2} direction="row" className={stack}>
        <SearchProduct />
        <Link to="/add-product" className={link}>
          <AddButton style={{ margin: "40px 100px 0 40px" }}>
            Add product
          </AddButton>
        </Link>
      </Stack>
      <ProductsList />
    </>
  );
};

export default MainPage;
