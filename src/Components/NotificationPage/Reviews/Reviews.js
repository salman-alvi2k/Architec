import React from 'react'
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import { db } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../Context/AuthContext";
import Footer from "../../Footer/Footer";
import NavAndSide from "../../NavAndSide/NavAndSide";

const Reviews = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [rating, setRating] = useState([]);
  const { setSelectedRow } = useAuthContext();
  const navigate = useNavigate();


  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      borderRadius: 4,
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #4caf50",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:focus": {
        borderRadius: 4,
        borderColor: green,
        boxShadow: "0 0 0 0.2rem #00000",
      },
    },
  }));

  useEffect(() => {
    db.collection("reviews")
    // .where("rating", "==", rating)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setRating(querySnapshot.docs.map((doc) => doc.data()));
            console.log(doc.id, " => ", doc.data());
            
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

  }, [rating]);

  const SelectedRow = (row) => {
    setSelectedRow(row);
     navigate("/Details");  
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <NavAndSide />
      {/* <NavAndSide /> */}
      <Typography
        sx={{
          fontSize: 50,
          display: "inline",
          justifyContent: "left",
          marginTop: 2,
          color: green[500],
        }}
      >
        User Reviews
      </Typography>
      <Paper sx={{ width: "100%", overflow: "hidden", marginTop: 10 }}>
        <FormControl sx={{ m: 1, padding: 3 }} variant="success">
          <InputLabel id="demo-customized-select-label" sx={{ marginLeft: 3 }}>
            Rating
          </InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
            label="Rating"
            input={<BootstrapInput />}
          >
            <MenuItem value="None">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Lower">Lower - Higher</MenuItem>
            <MenuItem value="Higher">Higher - Lower</MenuItem>
          </Select>
        </FormControl>
        {/* <FormControl sx={{ m: 1, padding: 3, width: "30%" }} variant="error">
          <InputLabel id="demo-customized-select-label" sx={{ marginLeft: 3 }}>
            City
          </InputLabel>
          <Select
            label="City"
            id="demo-customized-select"
            input={<BootstrapInput />}
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          >
            <MenuItem value="None">
              <em>None</em>
            </MenuItem>
          </Select>
        </FormControl> */}
        <Container
          sx={{
            display: "flex",
            justifyContent: "right",
          }}
        ></Container>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Number</TableCell>
                <TableCell align="left">User Type</TableCell>
                <TableCell align="left">Society</TableCell>
                <TableCell align="left">City</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rating
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      onClick={()=> {SelectedRow(row)}}
                      hover role="checkbox" 
                      tabIndex={-1}
                      key={row.email}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{row.review}</TableCell>
                      {/* <TableCell align="left">{row.reviewId}</TableCell>
                      <TableCell align="left">{row.userId}</TableCell> */}
                      {/* <TableCell align="left">{row.number}</TableCell>
                      <TableCell align="left">{row.user}</TableCell>
                      <TableCell align="left">{row.society}</TableCell>
                      <TableCell align="left">{row.city}</TableCell> */}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={rating.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Footer />
    </div>
  );
};

export default Reviews
