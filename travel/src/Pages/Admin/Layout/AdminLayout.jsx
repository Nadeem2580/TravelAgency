import { AddCircle, Dashboard, Menu } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import {
  AppBar, Box, Button, Container, Drawer, IconButton, List, ListItemText, Toolbar, Typography
} from '@mui/material';
import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (

    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f4f6f8' }}>
      {/* ===== AppBar ===== */}
      <AppBar position="fixed" sx={{ bgcolor: '#ef6c57' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}><Menu /></IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Travel Agency Admin</Typography>
          <Button color="inherit" onClick={() => navigate("/admin/creat_tour")} startIcon={<AddCircle />}>
            Add Package
          </Button>
        </Toolbar>
      </AppBar>

      {/* ===== Drawer ===== */}
      <Drawer variant="temporary" open={drawerOpen} onClose={toggleDrawer} sx={{ '& .MuiDrawer-paper': { width: 240 } }}>
        <Toolbar />
        <List sx={{ display: "flex", flexDirection: "column", gap: "10px", ml: 2 }}>
          <Link to="/admin" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#000" }}>
            <Dashboard /><ListItemText primary="Dashboard" />
          </Link>
          <Link to="/admin/admin-user" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#000" }}>
            <AccountCircleIcon /><ListItemText primary="All Users" />
          </Link>
          <Link to="/admin/admin-booking" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#000" }}>
            <PersonIcon /><ListItemText primary="Bookings" />
          </Link>
        </List>
      </Drawer>

      {/* ===== Page Content ===== */}
      <Container maxWidth="lg">

        <Box component="main" sx={{ mt: 8 }}>
          <Outlet />  {/* All admin pages render here */}
        </Box>
      </Container >
    </Box>
  );
};

export default AdminLayout;
