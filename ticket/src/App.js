import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/Header";
import customTheme from "./utils/theme";
import Signup from "./components/Signup";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <NavBar />
      <BrowserRouter>
      <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;