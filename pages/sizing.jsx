import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Box, Flex, H1, H4, Button, Inline } from '../components';

const Item = Box.extend`
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
      <Item key={i} flexDirection="column" fullWidth={ direction === "column"} fullHeight={ direction === "row" } flex={`${c.grow} ${c.shrink} ${c.basis}`}>
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
      </Item>
    ));

    return (
      <>
        <Box flexDirection="column" px={4} pb={4} justify="flex-start" align="flex-start">
          <H1 color="grayscale.2">Sizing elements - grow, shrink, basis</H1>

          <H4>Containers can control their size<Inline color="accent" ml={1}>based on available space</Inline></H4>
          <H4>Containers can <Inline color="accent" ml={1}>grow or shrink</Inline></H4>
          <H4>Grow and shrink values are <Inline color="accent" mx={1}>relative</Inline> to other containers</H4>
          <H4 mb={3}>Containers can set a basis that <Inline color="accent" ml={1}>defines its minimum size along the major axis</Inline></H4>
          <Box mb={4}>
            <Button mr={5} onClick={() => this.setState({ containers: [...defaultItems] })}>Reset</Button>
            <Button active={direction === "row"} onClick={() => this.setState({ direction: "row" })} mr={2}>row</Button>
            <Button active={direction === "column"} onClick={() => this.setState({ direction: "column" })} mr={2}>column</Button>
          </Box>
        </Box>

        <Flex px={4} pb={4} fullWidth fullHeight flexDirection={direction}>
          {items}
        </Flex>   
      </>
    )
  }
}

export default Sizing;