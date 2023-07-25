import React from 'react'
// import { useState, useContext } from 'react';
import { Container } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import { Divider } from '@mui/material';
import NavAndSide from "./../../NavAndSide/NavAndSide";
import { useAuthContext } from '../../../Context/AuthContext';


const Details = () => {
  const { selectedRow } = useAuthContext();
  console.log(selectedRow);

  return (
    <div>
        <NavAndSide />
      <Container sx={{display: "flex", borderRadius: 4}}>
        <PersonIcon sx={{
            float : "left",
            width: "25rem",
            height: "25rem",
            borderRadius: 4,
        }}/>
       <Card sx={{ width: "100%" }}>
      <CardContent sx={{ display: "flex"}}>
        <Container sx={{display: "flex", flexDirection: "column" ,width: "10rem", alignItems: "flex-start"}}>
      <Typography sx={{ fontSize: 20 }} color="text.secondar" gutterBottom>
          Email: 
        </Typography>
        <Divider sx={{mb: 3}}/>

        <Typography sx={{ fontSize: 20 }} color="text.secondar" gutterBottom>
          Name:
        </Typography>
        <Divider sx={{mb: 3}}/>

        <Typography sx={{ fontSize: 20 }} color="text.secondar" gutterBottom>
          User Type:
        </Typography>
        <Divider sx={{mb: 3}}/>

        <Typography sx={{ fontSize: 20 }} color="text.secondar" gutterBottom>
          Address:
        </Typography>
        <Divider sx={{mb: 3}}/>

        <Typography sx={{ fontSize: 20 }} color="text.secondar" gutterBottom>
          City:
        </Typography>
        <Divider sx={{mb: 3}}/>

        <Typography sx={{ fontSize: 20 }} color="text.secondar" gutterBottom>
          Number:
        </Typography>
        <Divider/>
        </Container>


        <Container sx={{display: "flex", flexDirection: "column" ,width: "20rem", mb: 2, fontVariant: "all-petite-caps", alignItems: "flex-start"}}>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {selectedRow.id}
        </Typography>
        <Divider sx={{mb: 3}}/>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {selectedRow.row.name}
        </Typography>
        <Divider sx={{mb: 3}}/>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {selectedRow.row.user}
        </Typography>
        <Divider sx={{mb: 3}}/>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {selectedRow.row.address}
        </Typography>
        <Divider sx={{mb: 3}}/>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {selectedRow.row.city}
        </Typography>
        <Divider sx={{mb: 3}}/>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {selectedRow.row.number}
        </Typography>
        <Divider sx={{mb: 3}}/>
        </Container>

        <Divider/>

        {/* <Container sx={{display: "flex", width: "20rem", justifyContent: "space-between"}}>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          City:
        </Typography>
        <Typography variant="body2">
          {selectedRow}
        </Typography>
        </Container> */}
          <br />
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>

      </Container>
    </div>
  )
}

export default Details
