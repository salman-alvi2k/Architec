import React from 'react'
import { Container } from '@mui/system';
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ReviewsIcon from '@mui/icons-material/Reviews';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ListItem from "@mui/material/ListItem";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NavAndSide from "../NavAndSide/NavAndSide";
import Footer from "../Footer/Footer";

function ListItemLink(props) {
  const { icon, primary, to } = props;

  return (
    <li>
      <ListItem button component={Link} to={to}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}
ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

function Mail() {
  return (
    <Container >
      <NavAndSide/>
      <List sx={{
        display: 'flex',
        flexDirection: 'column',
        
      }}>
            <ListItemLink to="/newUser" primary="Reviews"  icon={<PersonAddAltIcon />} />
          </List>
        <Footer/>
        </Container>
  )
}

export default Mail