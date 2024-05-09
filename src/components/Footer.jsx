import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="full" p={5} borderTop="1px" borderColor="gray.200">
      <Text textAlign="center" fontSize="sm" color="gray.600">
        © 2024 Software 3.0. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
