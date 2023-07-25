import React from "react";
import { useState } from "react";
import { RecaptchaVerifier } from "firebase/auth";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import { green } from "@mui/material/colors";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { auth } from "../../firebase";
import Phone from "@mui/icons-material/LocalPhone";
import OTP from "@mui/icons-material/Key";
import { useAuthContext } from "../../Context/AuthContext";

const PhoneSignin = () => {
  const CountryCode = "+92";
  const [number, setNumber] = useState(CountryCode);
  const [otp, setOtp] = useState("");
  const [expand, setExpand] = useState(false);
  const { PhoneSignin } = useAuthContext();
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
        boxShadow: "0 0 0 0.2rem rgba(238, 75, 43,.60)",
      },
    },
  }));

  const generatecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
    console.log(number);
  };

  const RequestOTP = async (e) => {
    e.preventDefault();
    if (number.length === 13) {
      try {
        generatecaptcha();
        setExpand(true);
        await PhoneSignin(number, window.recaptchaVerifier);
        console.log(number);
      } catch (error) {
        console.log(error);
        alert("No Admin With This Number is Registered");
      }

      // signInWithPhoneNumber(auth, number, window.recaptchaVerifier)
      //   .then((confirmationResult) => {
      //     window.confirmationResult = confirmationResult;
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     console.log(number);
      //   });
    } else {
      alert("Please Enter Correct Phone Number");
    }
  };

  const OTPVerification = async (e) => {
    if (otp.length === 6) {
      e.preventDefault();
      console.log("salman");
      window.confirmationResult
        .confirm(otp)
        .then((result) => {
          navigate("/home");
        })
        .catch((error) => {
          alert("Incorrect OTP");
        });
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, padding: 10 }} variant="success">
        <h1>Phone Authentication</h1>
        <TextField
          label="Phone number"
          variant="outlined"
          type="tel"
          value={number}
          InputBase={BootstrapInput}
          onChange={(event) => setNumber(event.target.value)}
          InputProps={{
            startAdornment: <Phone />,
          }}
          sx={{ mt: 2, mb: 3 }}
        />
        {expand === true ? (
          <TextField
            label="OTP"
            variant="outlined"
            type="number"
            value={otp}
            InputBase={BootstrapInput}
            onChange={(event) => setOtp(event.target.value)}
            inputProps={{
              startAdornment: <OTP />,
            }}
            sx={{ mt: 2, mb: 3 }}
          />
        ) : null}

        {expand === true ? (
          <Button
            variant="contained"
            color="success"
            sx={{ mt: 2, mb: 3 }}
            onClick={OTPVerification}
          >
            Sign In
          </Button>
        ) : null}

        {expand === false ? (
          <Button
            variant="contained"
            color="success"
            onClick={RequestOTP}
            sx={{ mt: 2, mb: 3 }}
          >
            Send OTP
          </Button>
        ) : null}
        <Link to="/">
          <Button variant="contained" color="success" sx={{ mt: 2, mb: 3 }}>
            Cancel
          </Button>
        </Link>
        <Container id="recaptcha-container"></Container>
        <Footer />
      </FormControl>
    </div>
  );
};

export default PhoneSignin;
