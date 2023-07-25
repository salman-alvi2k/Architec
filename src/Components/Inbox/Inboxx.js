import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { db } from "../../firebase";

import { green } from "@mui/material/colors";

import InputBase from "@mui/material/InputBase";

import { Typography } from "@mui/material";
import NavAndSide from "../../Components/NavAndSide/NavAndSide";

const Inboxx = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [usertype, setUsertype] = useState("None");
  const [users, setUsers] = useState([]);

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
    db.collection("users")
      // .where("user", "==", usertype)
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

  const columns = [
    // { field: "id", headerName: "ID", flex: 0.5 },
    // { field: "registrarId", headerName: "Registrar ID" },
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
      field: "city",
      headerName: "City",
      flex: 1,
    },
  ];

  return (
    <>
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
    
    {/* <Box m="20px">
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
        // checkboxSelection
          rows={users}
          columns={columns}
          getRowId={(row) => row.email}
        />
      </Box>
    </Box> */}
    </>
  );
};

export default Inboxx;
