import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Chip, Stack, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useState } from 'react';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    marginLeft: 'auto',
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function TourCard({ data }) {
    const [expanded, setExpanded] = React.useState(false);
    const [anchorEl, setAnchorEl] = useState(false)
    const handleExpandClick = () => setExpanded(!expanded);
const onEdit = (data)=>{
console.log(data , "data edit")
}



    return (
        <Card
            sx={{
                borderRadius: 3,
                boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 10px 25px rgba(0,0,0,0.15)' },
            }}
        >
            <CardHeader
                action={
                    <>
                        <IconButton aria-label="settings" onClick={(e) => setAnchorEl(e.currentTarget)}>
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={() => setAnchorEl(null)}
                        >
                            <MenuItem sx={{ fontSize: "10px", fontWeight: "bold" }} onClick={() => { onEdit(data)}}>Edit</MenuItem>
                            <MenuItem sx={{ fontSize: "10px", fontWeight: "bold" }} onClick={() => { /* Delete action */ }}>Delete</MenuItem>
                        </Menu>
                    </>
                }
                title={data.name}
                subheader={`Duration: ${data.durationDays}`}
            />


            <CardMedia component="img" height="200" image={data.image} alt={data.name} />

            {/* Airline + Rate */}
            <Box sx={{ px: 2, py: 1 }}>
                <Stack direction="row" justifyContent="space-between">
                    <Chip
                        label={`✈️ ${data.airline}`}
                        sx={{
                            bgcolor: 'primary.main',
                            color: 'white',
                            fontWeight: 600,
                            fontSize: 13,
                        }}
                    />
                    <Chip
                        label={`💰 ${data.travelRates}`}
                        sx={{
                            bgcolor: 'secondary.main',
                            color: 'white',
                            fontWeight: 600,
                            fontSize: 13,
                        }}
                    />
                </Stack>
            </Box>

            {/* Description */}
            <CardContent sx={{ pt: 0.5, pb: 1 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {data?.description?.slice(0, 120)}
                    {!expanded && (
                        <span
                            onClick={handleExpandClick}
                            style={{ color: '#1976d2', marginLeft: '6px', cursor: 'pointer', fontWeight: 500 }}
                        >
                            See more
                        </span>
                    )}
                </Typography>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                        {data?.description?.slice(120)}
                    </Typography>

                    <Typography
                        onClick={handleExpandClick}
                        sx={{
                            mt: 1,
                            color: '#1976d2',
                            cursor: 'pointer',
                            fontWeight: 500,
                            fontSize: 14,
                        }}
                    >
                        See less
                    </Typography>
                </Collapse>

            </CardContent>

            {/* Smooth expanding section */}

        </Card>
    );
}
