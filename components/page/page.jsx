import React from "react";
import { Box, Flex } from "../containers";

const Children = Flex.extend`
  height: 100%;
`;

const Page = ({ content, children }) => {
  return (
    <Box fullWidth fullHeight justify="flex-start" align="flex-start" pt="7rem">
      <Box bg="grayscale.4" p={4} fullHeight align="flex-start" mr={4} width="30%">
        {content}
      </Box>

      <Flex fullHeight flexDirection="column" justify="flex-start" align="flex-start" py={4} pr={4}>
        {children}
      </Flex>
    </Box>
  );
}

export default Page;