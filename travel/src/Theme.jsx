import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:not(.MuiInputBase-multiline)": {
            height: "42px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ef6c57",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ef6c57",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ef6c57",
          },
          "& input::placeholder, & textarea::placeholder": {
            fontSize: "10px",
            opacity: 0.9,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#ef6c57",
          fontSize: "12px",
          "&.Mui-focused": {
            color: "#ef6c57",
          },
        },
      },
    },
  },
});

export default theme;
