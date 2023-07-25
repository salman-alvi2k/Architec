import React from "react";
import { Copyright } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#0000",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        mt: "2rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="#00000" variant="h5">
              Architec
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="#00000" variant="subtitle1">
              {`${new Date().getFullYear()} | Architec`}
              <Copyright sx={{ mt: 5, fontSize: 15 }} />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;