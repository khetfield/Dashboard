import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PointOfSaleRoundedIcon from '@mui/icons-material/PointOfSaleRounded';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import TrafficRoundedIcon from '@mui/icons-material/TrafficRounded';

const Card1 = (
  <React.Fragment>
    <CardContent className='Cards'>
      <PointOfSaleRoundedIcon className="CardIcons"></PointOfSaleRoundedIcon>
      <Typography className="Number" variant="h4" component="div">
        837
      </Typography>
      <Typography className="Category" variant='h5'>
        Sales Obtained
      </Typography>
      <Typography className='Percent' variant="h5">
        +21%
      </Typography>
    </CardContent>
  </React.Fragment>
);

const Card2 = (
    <React.Fragment>
      <CardContent className='Cards'>
        <PersonAddAlt1RoundedIcon className="CardIcons"></PersonAddAlt1RoundedIcon>
        <Typography className="Number" variant="h4" component="div">
         86,435
        </Typography>
        <Typography className="Category" variant='h5'>
          New Clients
        </Typography>
        <Typography className='Percent' variant="h5">
          +5%
        </Typography>
      </CardContent>
    </React.Fragment>
);

  const Card3 = (
    <React.Fragment>
      <CardContent className='Cards'>
        <TrafficRoundedIcon className="CardIcons"></TrafficRoundedIcon>
        <Typography className="Number" variant="h4" component="div">
         23,784,133
        </Typography>
        <Typography className="Category" variant='h5'>
          Traffic Received
        </Typography>
        <Typography className='Percent' variant="h5">
          +43%
        </Typography>
      </CardContent>
    </React.Fragment>
);

  const Card4= (
    <React.Fragment>
      <CardContent className='Cards'>
        <Typography className="Number2" variant="h4" component="div">
         $271,434.63
        </Typography>
        <Typography className="Category" variant='h5'>
          Revenue Generated
        </Typography>
      </CardContent>
    </React.Fragment>
);

export default function SmallOutlinedCards() {
  return (
    <>
    <Box sx={{ minWidth: 275 }}className="Box">
      <Card variant="outlined">{Card1}</Card>
    </Box>
    <Box sx={{ minWidth: 275 }}className="Box">
      <Card variant="outlined">{Card2}</Card>
    </Box>
    <Box sx={{ minWidth: 275 }}className="Box">
      <Card variant="outlined">{Card3}</Card>
    </Box>
    <Box sx={{ minWidth: 275 }}className="Box2">
      <Card variant="outlined">{Card4}</Card>
    </Box>  
    </>
  );
}
