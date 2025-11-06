import { AddCircle, Dashboard, Flight, Menu } from '@mui/icons-material';
import {
  AppBar,
  Box, Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  List, ListItem, ListItemIcon, ListItemText,
  Toolbar, Typography
} from '@mui/material';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AllRoutes from '../All Api\'s';
import { BASE_URL } from '../utils/utils';
import TourCard from './CardTour';
import travelDestinations from '../../assets/object';

export default function AdminDashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const [allData, setAllData] = useState([]);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const get_all_data = async () => {
    try {
      const response = await axios.get(`${BASE_URL}${AllRoutes.get_all_Tour}`);
      const fetched = response.data.res || [];
      setAllData(fetched);
      console.log(fetched, "✅ fetched data");
    } catch (error) {
      console.error("❌ Error fetching tours:", error);
    }
  };

  useEffect(() => {
    get_all_data();
  }, []);


  

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f4f6f8' }}>
      {/* ===== AppBar ===== */}
      <AppBar position="fixed" sx={{ bgcolor: '#ef6c57' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}><Menu /></IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Travel Agency Admin</Typography>
          <Button color="inherit" onClick={() => navigate("/creat_tour")} startIcon={<AddCircle />}>
            Add Package
          </Button>
        </Toolbar>
      </AppBar>

      {/* ===== Drawer ===== */}
      <Drawer variant="temporary" open={drawerOpen} onClose={toggleDrawer}
        sx={{ '& .MuiDrawer-paper': { width: 240 } }}>
        <Toolbar />
        <List>
          <Link to={"/admin"} button><ListItemIcon><Dashboard /></ListItemIcon><ListItemText primary="Dashboard" /></Link>
          <Link to={"/admin-booking"} button><ListItemIcon><Flight /></ListItemIcon><ListItemText primary="Travel Packages" /></Link>
        </List>
      </Drawer>

      {/* ===== Main Content ===== */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Typography variant="h5" sx={{ mb: 3, color: '#333', fontWeight: 'bold' }}>
          Manage Travel Packages
        </Typography>

        {/* ===== Grid Layout ===== */}
        <Container maxWidth="md" >

          <Grid container spacing={2}>
            {travelDestinations.map((item, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>

                <TourCard data={item} />

              </Grid>
            ))}
          </Grid>
        </Container>


      </Box>
    </Box>
  );
}
