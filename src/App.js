import { Box } from "@chakra-ui/react";
import "./App.css";
import BannerPage from "./Components/BannerPage";
import SearchForm from "./Components/SearchForm";
import DataGrid from "./Components/DataGrid";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [capsules, setCapsules] = useState([]);
  const [filteredCapsules, setFilteredCapsules] = useState([]);
  const [status, setStatus] = useState("");
  const [originalLaunch, setOriginalLaunch] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchCapsules = async () => {
      try {
        const response = await axios.get(
          "https://api.spacexdata.com/v3/capsules"
        );
        setCapsules(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCapsules();
  }, []);

  const handleSearch = (filters) => {
    // Perform the search based on the selected filters
    const filteredData = capsules.filter((capsule) => {
      // Apply the selected filters
      const matchesStatus = !status || capsule.status === status;
      const matchesOriginalLaunch =
        !originalLaunch || capsule.original_launch === originalLaunch;
      const matchesType = !type || capsule.type === type;

      return matchesStatus && matchesOriginalLaunch && matchesType;
    });

    setFilteredCapsules(filteredData);
  };

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
        <SearchForm
          setStatus={setStatus}
          setOriginalLaunch={setOriginalLaunch}
          setType={setType}
          onSearch={handleSearch}
          status={status}
          type={type}
          originalLaunch={originalLaunch}
          filteredCapsules={filteredCapsules}
        />
        <DataGrid filteredCapsules={filteredCapsules} />
      </Box>
    </div>
  );
}

export default App;
