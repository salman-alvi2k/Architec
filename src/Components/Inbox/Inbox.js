import * as React from "react";
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
import { db } from "../../firebase";
// import { collection, onSnapshot, query, where, getDocs } from "firebase/firestore";
import NavAndSide from "../../Components/NavAndSide/NavAndSide";
import Footer from "../../Components/Footer/Footer";

function Inbox() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [usertype, setUsertype] = useState("None");
  // const [client, setClient] = useState("None");

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
    // onSnapshot(
    //   collection(db, "users"),
    //   where("user", "==", usertype),
    //   (snapshot) => {
    //     setUsers(snapshot.docs.map((doc) => doc.data()));
    //     console.log(users)

    db.collection("users")
    .where("user", "==", usertype)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            setUsers(querySnapshot.docs.map((doc) => doc.data()));
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

  }, [usertype]);

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
      <Typography
        sx={{
          fontSize: 50,
          display: "inline",
          justifyContent: "left",
          marginTop: 2,
          color: green[500],
        }}
      >
        Register Users
      </Typography>
      <Paper sx={{ width: "100%", overflow: "hidden", marginTop: 10 }}>
        <FormControl sx={{ m: 1, padding: 3 }} variant="success">
          <InputLabel id="demo-customized-select-label" sx={{ marginLeft: 3 }}>
            User Type
          </InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={usertype}
            onChange={(e) => {
              setUsertype(e.target.value);
            }}
            label="Architect/Client"
            input={<BootstrapInput />}
          >
            <MenuItem value="None">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Architect">Architect</MenuItem>
            <MenuItem value="Client">Client</MenuItem>
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
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">{row.number}</TableCell>
                      <TableCell align="left">{row.user}</TableCell>
                      <TableCell align="left">{row.society}</TableCell>
                      <TableCell align="left">{row.city}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Footer/>
    </div>
  );
}

export default Inbox;
