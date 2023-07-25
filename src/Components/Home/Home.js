import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CampaignIcon from "@mui/icons-material/Campaign";
import ArchitectureIcon from '@mui/icons-material/Architecture';
import Container from "@mui/material/Container";
import Stats from "../Chart/Stats";
import Stats2 from "../Chart/Stats2";
import {Traffic} from "../Chart/Traffic";
import OrderTable from "../Orders/Order";
import NavAndSide from "../../Components/NavAndSide/NavAndSide";
import Footer from "../../Components/Footer/Footer";

function Home() {
  const [Counter, setCounter] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));


  return (
    <>
      <Container>
        <NavAndSide/>
        
        <Grid container spacing={10}>
          <Grid item xs={4}>
            <Item>
              <React.Fragment>
                <ScrollTrigger
                  onEnter={() => {
                    setCounter(true);
                  }}
                  onExit={() => {
                    setCounter(false);
                  }}
                >
                  <Container
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "30px",
                    }}
                  >
                    <AccountCircleIcon
                      sx={{ fontSize: 80, color: "#66bb6a" }}
                    ></AccountCircleIcon>
                    <Container display="column-flex">
                      <Typography
                        sx={{
                          fontSize: 20,
                        }}
                      >
                        Clients
                      </Typography >
                      <Typography sx={{
                          fontSize: 20,
                        }}>
                        {Counter && <CountUp start={0} end={92} duration={3} />}
                      </Typography>
                    </Container>
                  </Container>
                </ScrollTrigger>
              </React.Fragment>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <React.Fragment>
                <ScrollTrigger
                  onEnter={() => {
                    setCounter(true);
                  }}
                  onExit={() => {
                    setCounter(false);
                  }}
                >
                  <Container
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "30px",
                    }}
                  >
                    <CampaignIcon
                      sx={{ fontSize: 80, color: "#66bb6a" }}
                    ></CampaignIcon>
                    <Container display="column-flex">
                      <Typography
                        sx={{
                          fontSize: 20,
                        }}
                      >
                        Campaigns
                      </Typography>
                      <Typography sx={{
                          fontSize: 20,
                        }}>
                        {Counter && <CountUp start={0} end={50} duration={3} />}
                      </Typography>
                    </Container>
                  </Container>
                </ScrollTrigger>
              </React.Fragment>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <React.Fragment>
                <ScrollTrigger
                  onEnter={() => {
                    setCounter(true);
                  }}
                  onExit={() => {
                    setCounter(false);
                  }}
                >
                  <Container
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "30px",
                    }}
                  >
                    <ArchitectureIcon
                      sx={{ fontSize: 80, color: "#66bb6a" }}
                    ></ArchitectureIcon>
                    <Container display="column-flex">
                      <Typography
                        sx={{
                          fontSize:20,
                        }}
                      >
                        Architects
                      </Typography>
                      <Typography sx={{ fontSize:20}}
                      >
                        {Counter && (
                          <CountUp start={0} end={54} duration={3} />
                        )}
                      </Typography>
                    </Container>
                  </Container>
                </ScrollTrigger>
              </React.Fragment>
            </Item>
          </Grid>
        </Grid>
        <Grid>
        <Typography display="flex" justifyContent="center" color={"#388e3c"} sx={{ fontSize: 30, padding: "20px" }}>
          Traffic
        </Typography> 
        <Stats2/> 
        {/* <Traffic/> */}
         </Grid>
        {/* <Typography display="flex" justifyContent="center" color={"#388e3c"} sx={{ fontSize: 30, padding: "20px" }}>
          Orders
        </Typography> */}
       {/* <Stats/> */}

            {/* <Stats /> */}
          
        <OrderTable/>
      </Container>
      <Footer/>
    </>
  );
}

export default Home;
