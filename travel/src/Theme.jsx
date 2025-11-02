import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    height: "50px",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ef6c57",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ef6c57",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ef6c57",
                    },
                    // 👇 Placeholder font size
                    "& input::placeholder": {
                        fontSize: "10px",
                        opacity: 0.9, // optional for softer look
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "#ef6c57",
                    "&.Mui-focused": {
                        color: "#ef6c57",
                    },
                },
            },
        },
    },
});

export default theme;
