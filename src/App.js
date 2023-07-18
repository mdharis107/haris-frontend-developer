import { Box } from "@chakra-ui/react";
import "./App.css";
import BannerPage from "./Components/BannerPage";

function App() {
  return (
    <div className="App">
      <Box
        bgImage={`url(${"https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"})`}
        backgroundPosition="center"
        backgroundSize="cover"
        // display="flex"
        bgRepeat={"no-repeat"}
        flexDirection="column"
        minHeight="100vh"
      >
        <BannerPage />
      </Box>
    </div>
  );
}

export default App;
