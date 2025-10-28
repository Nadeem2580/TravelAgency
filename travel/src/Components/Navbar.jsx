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
import { Link } from 'react-router-dom';

const pages = [
    { "title": "Home", url: "/" },
    { "title": "Destination", url: "/destination" },
    { "title": "About", url: "/about" },
    { "title": "Contact", url: "/contact" },
];

function Navbar({ children }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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

    return (
        <>

            <Container maxWidth="lg" sx={{ backgroundColor: "#fff" }}>

                <Toolbar disableGutters>
                    {/* Descktop Logo */}

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            color:"#ef6c57"
                        }}
                    >
                        Pak Tavelers
                    </Typography>


                    {/* Mobile logo */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            color:"#ef6c57"
                        }}
                    >
                        Pak Tavelers
                    </Typography>
                    {/* Descktop Links */}
                    <Box sx={{ color: "#555", flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "end" }}>
                        {pages.map((page) => (

                            <Link to={`${page.url}`} key={page.title} style={{textDecoration:"none"}}>
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
                                    <Typography sx={{ textAlign: 'center', color: "#555" }}>{page.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
            {children}
        </>
    );
}
export default Navbar;