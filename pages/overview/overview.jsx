import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Box, Flex, H1, H4, Button, Inline } from '../../components';

import Content from "./content.md";

class Index extends React.Component {
  state = { 
    boxes : [0, 0, 1], 
    direction: "row",
    randomize: false
  };

  render = () => {
    const { boxes, direction, randomize } = this.state;

    const boxProperties = {
      bg: "purple",
      px: 4,
      m: 2,
      minHeight: "20rem",
      minWidth: "20rem",
      color: "white",
      fontSize: 3
    };

    const b = boxes.map((b, i, a) => {
      let order = i;
      if (randomize) {
        order = Math.floor(Math.random() * a.length);
      }

      return b === 1 ? 
        <Flex key={i} {...boxProperties} bg="orange" order={order}>F {i}</Flex>
        : <Box key={i} {...boxProperties} order={order}>B {i}</Box>
    });

    return (
      <Flex fullWidth flexDirection="column" px={4} pb={4} justify="flex-start" align="flex-start">
        <Content components={{
          h1: H1
        }}/>

        <Box mt={3} mb={5} pl={3}>
          <Button mr={5} onClick={() => this.setState({ boxes: [0, 0, 1] })}>Reset</Button>

          <Button onClick={() => this.addBox(1)} mr={2}>Add flexible container</Button>
          <Button onClick={() => this.addBox(0)} mr={5}>Add inflexible container</Button>

          <Button active={ direction === "row" } onClick={() => this.setState({ direction: "row" })} mr={2}>row</Button>
          <Button active={ direction === "column" } onClick={() => this.setState({ direction: "column" })} mr={5}>column</Button>

          <Button onClick={() => this.randomize()} mr={5}>Randomize order</Button>
        </Box>
        
        <Flex style={{ overflow: "hidden" }} bg="grayscale.3" fullWidth fullHeight py={1} px={1} flexDirection={direction} flexWrap="wrap" align="flex-start" justify="flex-start">
          {b}
        </Flex>
      </Flex>
    )
  }
  
  addBox = (b) => this.setState({ boxes: [...this.state.boxes, b], randomize: false });

  randomize = () => this.setState({ randomize: true });
}

export default Index;