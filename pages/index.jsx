import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme';

import { Box, Flex, H1, Button } from '../components';

class Index extends React.Component {
  state = { boxes: [] }

  render = () => {
    const { boxes } = this.state;

    const b = boxes.map((b, i) => b === 1 ? 
        <Flex key={i} bg="yellow" p={4} mx={1}>{i}</Flex>
        : <Box key={i} bg="yellow" p={4} mx={1}>{i}</Box>
    );

    return (
      <ThemeProvider theme={theme}>
        <Box width="100%" flexDirection="column" p={4} justify="flex-start" align="flex-start">
          <H1 mb={2}>Simple single axis</H1>
        
          <Box mb={3}>
            <Button onClick={() => this.addBox(1)} mr={2}>Add Flex</Button>
            <Button onClick={() => this.addBox(0)} mr={2}>Add Box</Button>
            <Button onClick={() => this.setState({ boxes: [] })}>Clear</Button>
          </Box>
          
          <Box width="100%" bg="red" py={2} px={1} mb={3} justify="flex-start">
            {b}
          </Box>
        </Box>
      </ThemeProvider>
    )
  }

  addBox = (b) => {
    const boxes = [...this.state.boxes, b];
    this.setState({ boxes });
  };
}

export default Index;