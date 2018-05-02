import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Page, Box, Flex, Button, Inline, Overview, ButtonGroup, FlexItem, BoxItem } from '../../components';

import Content from "./content.md";
import * as md from "../../components/markdown";

class Index extends React.Component {
  state = { 
    boxes : [0, 0, 1], 
    direction: "row",
    randomize: false
  };

  render = () => {
    const { boxes, direction, randomize } = this.state;

    const b = boxes.map((b, i, a) => {
      let order = i;
      if (randomize) {
        order = Math.floor(Math.random() * a.length);
      }

      return b === 1 ? 
        <FlexItem key={i} order={order}>F {i}</FlexItem>
        : <BoxItem key={i} order={order}>B {i}</BoxItem>
    });

    return (
      <Page content={
          <Content components={{
            h1: md.H1, h2: md.H2, h3: md.H3, h4: md.H4, p: md.P, code: md.Code, ul: md.Ul
          }}/>
        }>
        <ButtonGroup>
          <Button mr={4} onClick={() => this.setState({ boxes: [0, 0, 1], randomize: false })}>Reset</Button>

          <Button onClick={() => this.addBox(1)} mr={2}>Add flexible container</Button>
          <Button onClick={() => this.addBox(0)} mr={4}>Add inflexible container</Button>

          <Button active={ direction === "row" } onClick={() => this.setState({ direction: "row" })} mr={2}>row</Button>
          <Button active={ direction === "column" } onClick={() => this.setState({ direction: "column" })} mr={5}>column</Button>

          <Button onClick={() => this.randomize()} mr={4}>Randomize order</Button>
        </ButtonGroup>
        
        <Flex bg="grayscale.3" fullWidth py={1} px={1} flexDirection={direction} flexWrap="wrap" align="flex-start" justify="flex-start">
          {b}
        </Flex>
      </Page>
    )
  }
  
  addBox = (b) => this.setState({ boxes: [...this.state.boxes, b], randomize: false });

  randomize = () => this.setState({ randomize: true });
}

export default Index;