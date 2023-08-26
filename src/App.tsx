import { Box, Flex } from "@chakra-ui/react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Events from "./pages/Events/Events";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Messages from "./pages/Messages/Messages";
import Register from "./pages/Register/Register";
import Users from "./pages/Users/Users";
import Password from "./pages/Password/password";
import Resetpassword from "./pages/Password/Resetpassword";
import Newrole from "./pages/Home/Newrole";
import Rolepage from "./pages/Home/Rolepage";
import Analyzedpage from "./pages/Home/Anaylzedpage";

function App() {
  return (
    <Router>
      <Flex direction='row' height='100vh'>
        <SideNav />
        <Flex direction='column' flex='1'>
          <Header />
          <Box pl={{ base: "20px", md: "10px" }} pr={5} py={5} flex='1' overflowY='auto'>
            <Routes>
            <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/password' element={<Password />} />
              <Route path='/resetpassword' element={<Resetpassword />} />
              <Route path='/users' element={<Users />} />
              <Route path='/events' element={<Events />} />
              <Route path='/messages' element={<Messages />} />
              <Route path='/newrole/:roleName' element={<Newrole />}  />
              <Route path='/rolepage/:roleName' element={<Rolepage />} />
              <Route path='/analyzedpage/:roleName' element={<Analyzedpage />} />

              
              
              <Route path='*' element={<div>Not Found</div>} />
            </Routes>
          </Box>
        </Flex>
      </Flex>
    </Router>
  );
}

export default App;