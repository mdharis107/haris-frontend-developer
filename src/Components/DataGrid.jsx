import { Box, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const DataGrid = ({ filteredCapsules }) => {
  console.log(filteredCapsules);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Box py={4} px={8}>

      <SimpleGrid columns={3} spacing={4}>
        {filteredCapsules.map((capsule) => (
          <Box
            key={capsule.capsule_id}
            p={4}
            borderWidth={1}
            borderRadius="md"
            borderColor="gray.300"
            cursor="pointer"
            onClick={() => handleClick(capsule)}
          >
            <Text fontWeight="bold">{capsule.capsule_serial}</Text>
            {/* Display other capsule data */}
          </Box>
        ))}
      </SimpleGrid>

      {selectedItem && (
        <Box p={4} mt={4} border="1px" borderColor="gray.200">
          <Text fontWeight="bold">{selectedItem.capsule_serial}</Text>
          <Text>{selectedItem.details}</Text>
          <Text>{selectedItem.original_launch}</Text>
          {/* Display other item data in the popup */}
        </Box>
      )}
    </Box>
  );
};

export default DataGrid;
