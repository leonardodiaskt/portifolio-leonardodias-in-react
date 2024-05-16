import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#2f2f2f',
        },
        secondary: {
            main: '#4f8e3e',
        },
    },
    typography: {
        fontFamily: "Helvetica Neue"
    }
});

theme =  responsiveFontSizes(theme);

export default theme;