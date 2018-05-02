import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Box, Flex, H4, Button, Inline, Page, ButtonGroup } from '../../components';

import Content from "./content.md";
import * as md from "../../components/markdown";

const FlexItem = Flex.extend`
  background-color: orange;
  color: white;
  font-size: ${props => props.theme.fontSizes[3]}px;
  margin: ${props => props.theme.space[2]}px;
`;

const defaultItems = [
  {
    grow: 1,
    shrink: 1,
    basis: "auto"
  },
  {
    grow: 1,
    shrink: 1,
    basis: "auto"
  },
  {
    grow: 1,
    shrink: 1,
    basis: "auto"
  }
];

class Sizing extends React.Component {
  state = { 
    direction: "row",
    containers: [...defaultItems]
  };

  growShrink = (index, container) => {
    this.state.containers.splice(index, 1, container);
    this.setState({ containers: this.state.containers });
  }

  render = () => {
    const { direction, containers } = this.state;

    const items = containers.map((c, i) => (
      <FlexItem key={i} flexDirection="column" fullWidth={ direction === "column" } fullHeight={ direction === "row" } flex={`${c.grow} ${c.shrink} ${c.basis}`}>
        <Box flexDirection="column" mb={3}>
          <H4>grow: {c.grow}</H4>
          <H4>shrink: {c.shrink}</H4>
          <H4>basis: {c.basis}</H4>
        </Box>
        
        <Box mb={2}>
          <Button mr={2} onClick={() => this.growShrink(i, Object.assign({}, c, { grow: c.grow + 1 }))}>Grow++</Button>
          <Button onClick={() => this.growShrink(i, Object.assign({}, c, { grow: c.grow - 1 }))}>Grow--</Button>
        </Box>

        <Box mb={2}>
          <Button mr={2} onClick={() => this.growShrink(i, Object.assign({}, c, { shrink: c.shrink + 1 }))}>Shrink++</Button>
          <Button onClick={() => this.growShrink(i, Object.assign({}, c, { shrink: c.shrink - 1 }))}>Shrink--</Button>
        </Box>
        
        <Box>
          <Button mr={2} onClick={() => this.growShrink(i, Object.assign({}, c, { basis: "auto" }))}>auto</Button>
          <Button mr={2} onClick={() => this.growShrink(i, Object.assign({}, c, { basis: "20%" }))}>20%</Button>
          <Button onClick={() => this.growShrink(i, Object.assign({}, c, { basis: "50rem" }))}>50rem</Button>
        </Box>
      </FlexItem>
    ));

    return (
      <Page content={
        <Content components={{
          h1: md.H1, h2: md.H2, h3: md.H3, h4: md.H4, p: md.P, code: md.Code, ul: md.Ul, pre: md.Pre
        }}/>}>

        <ButtonGroup>
          <Button mr={5} onClick={() => this.setState({ containers: [...defaultItems] })}>Reset</Button>
          <Button active={direction === "row"} onClick={() => this.setState({ direction: "row" })} mr={2}>row</Button>
          <Button active={direction === "column"} onClick={() => this.setState({ direction: "column" })} mr={2}>column</Button>
        </ButtonGroup>

        <Flex fullWidth fullHeight flexDirection={direction} bg="grayscale.3">
          {items}
        </Flex> 
      </Page>
    )
  }
}

export default Sizing;