import "./App.css";
import NavAndSide from "./Components/NavAndSide/NavAndSide";
import Home from "./Components/Home/Home";
// import Inbox from "./Components/Inbox/Inbox";
import Inboxx from "./Components/Inbox/Inboxx";
import Notification from "./Components/Notification/Notification";
import Container from "@mui/material/Container";
import Adminlogin from "./Components/Login/Adminlogin";
import PhoneSignin from "./Components/Login/PhoneSignin";
import NewUser from "./Components/NotificationPage/NewUser/NewUser";
import Reviews from "./Components/NotificationPage/Reviews/Reviews";
import Details from "./Components/NotificationPage/NewUser/Details";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import ProtectedRoutes from "./Components/ProtectedRoutes";

function App() {
    const [theme, colorMode] = useMode();

  return (
    <div className="App">
      <Container>
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AuthContextProvider>
            <Routes>
              <Route path="/" element={<Adminlogin />} />
              <Route path="/PhoneSignin" element={<PhoneSignin />} />
              <Route path="/navandside" element={<ProtectedRoutes><NavAndSide /></ProtectedRoutes>} />
              <Route path="/home"element={<ProtectedRoutes><Home /></ProtectedRoutes>}/>
              {/* <Route path="/inbox" element={<ProtectedRoutes><Inbox /></ProtectedRoutes>} /> */}
              <Route path="/inboxx" element={<ProtectedRoutes><Inboxx /></ProtectedRoutes>} />
              <Route path="/notification" element={<ProtectedRoutes><Notification /></ProtectedRoutes>} />
              <Route path="/newUser" element={<ProtectedRoutes><NewUser /></ProtectedRoutes>} />
              <Route path="/reviews" element={<ProtectedRoutes><Reviews /></ProtectedRoutes>} />
              <Route path="/Details" element={<ProtectedRoutes><Details /></ProtectedRoutes>} />
            </Routes>
          </AuthContextProvider>
        </Router>
        </ThemeProvider>
    </ColorModeContext.Provider>
      </Container>
    </div>
  );
}

export default App;
