import { Box, Container, Grid, Typography } from '@mui/material';
import axios from "axios";
import { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/utils';
import AllRoutes from '../All Api\'s';
import TourCard from './CardTour';

export default function AdminDashboard() {
  const [allData, setAllData] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);

  const get_all_data = async () => {
    try {
      const response = await axios.get(`${BASE_URL}${AllRoutes.get_all_Tour}`);
      const fetched = response.data.res || [];
      setAllData(fetched);
    } catch (error) {
      console.error("❌ Error fetching tours:", error);
    }
  };

  useEffect(() => {
    get_all_data();
  }, [isRefresh]);

  return (
    <>
    <Container >

      <Typography variant="h5" sx={{ mb: 3, color: '#333', fontWeight: 'bold' }}>
        Manage Travel Packages
      </Typography>

      <Grid container spacing={2}>
        {allData.map((item, index) => (
          <Grid size={{xs:12 , md:6}} key={index}>
            <TourCard data={item} isRefresh={isRefresh} setIsRefresh={setIsRefresh} />
          </Grid>
        ))}
      </Grid>
    </Container>
    </>

  );
}
