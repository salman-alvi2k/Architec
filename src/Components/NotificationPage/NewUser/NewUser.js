import React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import NavAndSide from "../../NavAndSide/NavAndSide";
import DeleteIcon from "@mui/icons-material/Delete";
import Footer from "../../Footer/Footer";
import Button from "@mui/material/Button";
import { db } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../Context/AuthContext";

const NewUser = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [users, setUsers] = useState([]);
  // const [rating, setRating] = useState([]);
  const [usertype, setUsertype] = useState("None");
  const { selectedRow, setSelectedRow } = useAuthContext();
  const [selectRow, setSelectRow] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    db.collection("users")
    .where("user", "==", "Architect")
    .where("block", "==", "false")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setUsers(querySnapshot.docs.map((doc) => doc.data()));
          console.log(users);
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, [selectRow]);

  const onButtonClick = () => {
    console.log("das", selectRow);
    selectRow.map((row) => {
      db.collection("users")
        .where("email", "==", row)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(function (doc) {
            console.log(doc.id, " => ", doc.data());
            doc.ref.update({ block: "true" });
          });
          console.log(selectRow.email);
        });
    });
  };

  const rowSelect = (row) => {
    console.log(row);
    setSelectRow(row);
  };

  const SelectedRow = (row) => {
    setSelectedRow(row);
    console.log(selectedRow);
    navigate("/Details");
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "number",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "user",
      headerName: "User",
      flex: 1,
    },
    {
      field: "society",
      headerName: "Society",
      flex: 1,
    },
    {
      field: "reviews",
      headerName: "Reviews",
      flex: 1,
    },
    // {
    //   field: "block",
    //   headerName: "Block",
    //   flex: 1,
    // },
  ];

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
        Reviews
      </Typography>
      <Paper sx={{ width: "100%", overflow: "hidden", marginTop: 10 }}>
        {/* <FormControl sx={{ m: 1, padding: 3 }} variant="success">
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
        </FormControl> */}
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
        <Box m="20px">
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={onButtonClick}
          >
            Block
          </Button>
          <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: colors.greenAccent[300],
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[700],
              },
              "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`,
              },
            }}
          >
            <DataGrid
              checkboxSelection
              rows={users}
              columns={columns}
              getRowId={(row) => row.email}
              onRowClick={(row) => SelectedRow(row)}
              onRowSelectionModelChange={(row) => rowSelect(row)}
            />
          </Box>
        </Box>
      </Paper>
      <Footer />
    </div>
  );
};

export default NewUser;
