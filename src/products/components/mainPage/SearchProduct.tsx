import React, { useState } from "react";
import {
  FormControl,
  InputAdornment,
  TextField,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles(() => {
  return createStyles({
    search: {
      margin: "50px 0 40px 20vw",
      width: "60vw",
      backgroundColor: "#f3f3f3",
    },
  });
});

const SearchProduct: React.FC = () => {
  const { search } = useStyles();

  const [showClearIcon, setShowClearIcon] = useState("none");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
    setInputValue(event.target.value);
  };

  const handleClick = (): void => {
    setInputValue("");
    setShowClearIcon("none");
  };

  return (
    <FormControl className={search}>
      <TextField
        value={inputValue}
        size="small"
        variant="outlined"
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              style={{ display: showClearIcon }}
              onClick={handleClick}>
              <ClearIcon />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default SearchProduct;
