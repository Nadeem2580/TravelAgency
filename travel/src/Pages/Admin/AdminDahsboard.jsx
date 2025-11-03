import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Button, Card, CardContent, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { Menu, Dashboard, Flight, AddCircle, Edit, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate()
  const [packages, setPackages] = useState([
    { id: 1, name: 'Azad Kashmir', price: 'PKR 18,000', duration: '5 Days', status: 'Active' },
    { id: 2, name: 'Hunza Valley', price: 'PKR 25,000', duration: '7 Days', status: 'Active' }
  ]);
  const [form, setForm] = useState({ id: null, name: '', price: '', duration: '', status: 'Active' });
  const [editing, setEditing] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const handleDialogOpen = () => { setDialogOpen(true); setEditing(false); setForm({ id: null, name: '', price: '', duration: '', status: 'Active' }); };
  const handleDialogClose = () => setDialogOpen(false);

  const handleSave = () => {
    if (editing) {
      setPackages(packages.map(pkg => (pkg.id === form.id ? form : pkg)));
    } else {
      setPackages([...packages, { ...form, id: Date.now() }]);
    }
    setDialogOpen(false);
  };

  const handleEdit = (pkg) => {
    setForm(pkg);
    setEditing(true);
    setDialogOpen(true);
  };

  const handleDelete = (id) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f4f6f8' }}>
      <AppBar position="fixed" sx={{ bgcolor: '#ef6c57' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}><Menu /></IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Travel Agency Admin</Typography>
          <Button color="inherit" onClick={()=>navigate("/creat_tour") } startIcon={<AddCircle />}>Add Package</Button>
        </Toolbar>
      </AppBar>

      <Drawer variant="temporary" open={drawerOpen} onClose={toggleDrawer} sx={{ '& .MuiDrawer-paper': { width: 240 } }}>
        <Toolbar />
        <List>
          <ListItem button>
            <ListItemIcon><Dashboard /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><Flight /></ListItemIcon>
            <ListItemText primary="Travel Packages" />
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8}}>
        <Typography variant="h5" sx={{ mb: 3, color: '#333', fontWeight: 'bold' }}>Manage Travel Packages</Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 2, mb: 4 }}>
          <Card sx={{ bgcolor: '#fff', boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" color="#ef6c57">Total Packages</Typography>
              <Typography variant="h4">{packages.length}</Typography>
            </CardContent>
          </Card>
          <Card sx={{ bgcolor: '#fff', boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" color="#ef6c57">Active</Typography>
              <Typography variant="h4">{packages.filter(p => p.status === 'Active').length}</Typography>
            </CardContent>
          </Card>
        </Box>

        <Table sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 3}}>
          <TableHead sx={{ bgcolor: '#ef6c57' }}>
            <TableRow>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Destination</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Price</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Duration</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {packages.map(pkg => (
              <TableRow key={pkg.id}>
                <TableCell>{pkg.name}</TableCell>
                <TableCell>{pkg.price}</TableCell>
                <TableCell>{pkg.duration}</TableCell>
                <TableCell>{pkg.status}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEdit(pkg)}><Edit /></IconButton>
                  <IconButton color="error" onClick={() => handleDelete(pkg.id)}><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

            {/* Modal  */}
        
        
        <Dialog sx={{border:"1px solid black"}} open={dialogOpen} onClose={handleDialogClose}>
          <DialogTitle>{editing ? 'Edit Package' : 'Add New Package'}</DialogTitle>
          <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField label="Destination Name" fullWidth value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <TextField label="Price" fullWidth value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
            <TextField label="Duration" fullWidth value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Cancel</Button>
            <Button variant="contained" sx={{ bgcolor: '#ef6c57' }} onClick={handleSave}>{editing ? 'Update' : 'Add'}</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}