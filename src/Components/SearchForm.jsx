import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SearchForm = ({
  onSearch,
  setStatus,
  setOriginalLaunch,
  setType,
  type,
  status,
  originalLaunch,
  filteredCapsules,
}) => {
  const handleSearch = () => {
    // Pass the search filters to the parent component for processing
    console.log("object");
    onSearch({ status, originalLaunch, type });
  };

  return (
    <Box py={4} px={8}>
      <Flex gap={5} alignItems={"center"} justify="space-evenly" mb={4}>
        <Select
          color={"black"}
          placeholder="Select status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="retired">Retired</option>
        </Select>

        <Input
          _placeholder={{ color: "white.500" }}
          placeholder="Enter original launch"
          value={originalLaunch}
          onChange={(e) => setOriginalLaunch(e.target.value)}
        />

        <Input
          placeholder="Enter type"
          _placeholder={{ color: "white.500" }}
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </Flex>
      <Button w={"180px"} colorScheme="blue" onClick={handleSearch}>
        Search
      </Button>
      {/* <SimpleGrid columns={3} spacing={4}>
        {filteredCapsules.map((capsule) => (
          <Box
            key={capsule.capsule_serial}
            p={4}
            borderWidth={1}
            borderRadius="md"
            borderColor="gray.300"
          >
            <Text fontWeight="bold">{capsule.capsule_serial}</Text>
          </Box>
        ))}
      </SimpleGrid> */}
    </Box>
  );
};

export default SearchForm;
