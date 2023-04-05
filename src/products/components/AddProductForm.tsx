import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(3),
        // width: "25ch",
      },
    },
    btnSubmit: {
      // margin: "40px 0 0 30vw",
      textDecoration: "none",
    },
  })
);

export default function AddProductsForm() {
  const { root, btnSubmit } = useStyles();

  return (
    <Container maxWidth="md">
      <Typography variant="h4" style={{ color: "#ffffff", marginTop: "100px" }}>
        Fill all the options
      </Typography>
      <form className={root} noValidate autoComplete="off">
        <div>
          <TextField required type="number" label="ID" variant="filled" />
          <TextField required type="string" label="Name" variant="filled" />
          <TextField required label="Author" variant="filled" />
          <TextField
            required
            label="Rating /10"
            variant="filled"
            helperText="on a 10-point scale"
          />
          <TextField required label="Year" type="number" variant="filled" />
          <TextField
            required
            label="Price"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </div>
        <Stack spacing={4} direction="row" style={{ textDecoration: "none" }}>
          <Link to="/">
            <Button variant="contained" className={btnSubmit}>
              Back
            </Button>
          </Link>
          <Button variant="contained" type="submit" className={btnSubmit}>
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
