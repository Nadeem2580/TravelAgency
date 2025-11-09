import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import pakTravelAgency from "../assets/pakTravelAgency.png"
import Cookies from "js-cookie"
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const pages = [
    { "title": "Home", url: "/" },
    { "title": "Destination", url: "/destination" },
    { "title": "About", url: "/about" },
    { "title": "Contact", url: "/contact" },
];

function Navbar({ children }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const stored = Cookies.get("token");
    const token = stored ? JSON.parse(stored) : null;
console.log(token , "token")
    const navigate = useNavigate()
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleAuth = () => {
        if (token) {
            // Logout logic
            Cookies.remove("token");
            navigate("/") // Optional: refresh page after logout
        } else {
            // Login logic
            navigate("/login") // Redirect to login page
        }
    };



    return (
        <>

            <Container maxWidth="lg" sx={{ backgroundColor: "#fff", boxShadow: "0 1px #ef6c57" }}>

                <Toolbar disableGutters>
                    {/* Descktop Logo */}
                    <Box component={"img"} src={pakTravelAgency} sx={{ width: "100px", display: { xs: 'none', md: 'flex' }, }} />



                    {/* Mobile logo */}

                    <Box component={"img"} src={pakTravelAgency} sx={{ width: "100px", display: { xs: 'flex', md: 'none' }, }} />
                    {/* Descktop Links */}
                    <Box sx={{ color: "#555", flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "end" }}>
                        {pages.map((page) => (

                            <Link to={`${page.url}`} key={page.title} style={{ textDecoration: "none" }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block', color: "#555", fontSize: "13px", fontWeight: "bold", }}
                                >
                                    {page.title}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    {/* Mobile menu  */}

                    <Box sx={{ color: "#555", flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "end" }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                                    <Link to={`${page.url}`} key={page.title} style={{ textDecoration: "none" }}>
                                        <Typography sx={{ textAlign: 'center', color: "#555" }}>{page.title}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {
                        token?.type == "user" ? <Button
                            onClick={handleAuth}
                            startIcon={token ? <LogoutIcon sx={{ fontSize: "14px !important" }} /> : <LoginIcon sx={{ fontSize: "14px !important" }} />}
                            sx={{
                                fontSize: "12px",
                                fontWeight: "bold",
                                boxShadow: "0 0 2px black",
                                textTransform: "none",
                                color: "black",
                                color: "#ef6c57",
                                backgroundColor: "#f5f5f5",
                                "&:hover": { backgroundColor: "#ddd" }
                            }}
                        >
                            {token ? "Logout" : "Login"}
                        </Button> :
                            <Button
                                onClick={() => navigate("/admin")}
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                    boxShadow: "0 0 2px black",
                                    textTransform: "none",
                                    color: "black",
                                    color: "#ef6c57",
                                    backgroundColor: "#f5f5f5",
                                    "&:hover": { backgroundColor: "#ddd" }
                                }}
                            >
                                Admin Dashboard
                            </Button>
                    }
                </Toolbar>
            </Container>
            {children}
        </>
    );
}
export default Navbar;