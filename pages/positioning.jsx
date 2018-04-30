import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Box, Flex, H1, H4, Button, Inline } from '../components';

const Item = Box.extend`
  background-color: yellow;
  padding: 0 ${props => props.theme.space[4]}px;
  margin: ${props => props.theme.space[2]}px;
  min-height: 20rem;
  min-width: 20rem;
  color: white;
  font-size: ${props => props.theme.fontSizes[3]}px;
`;

const alignValues = [
  "flex-start",
  "center",
  "flex-end"
];
const justifyValues = [
  "flex-start",
  "center",
  "flex-end",
  "space-around",
  "space-between",
  "space-evenly"
];

class Index extends React.Component {
  state = { 
    align: "flex-start",
    justify: "flex-start",
    direction: "row"
  };

  render = () => {
    const { align, justify, direction } = this.state;

    const aligns = alignValues.map((a, i, values) => (
      <Button key={`align_${i}`} active={align === a} onClick={() => this.setState({ align: a })} mr={2}>{a}</Button>
    ));
    const justifys = justifyValues.map((j, i) => (
      <Button key={`justify_${i}`} active={justify === j} onClick={() => this.setState({ justify: j })} mr={2}>{j}</Button>
    ));

    return (
      <Flex fullWidth flexDirection="column" px={4} pb={4} justify="flex-start" align="flex-start">
        <H1 color="grayscale.2">Positioning elements</H1>

        <H4 mb={2} color="grayscale.1">
          <Inline color="accent" mr={1}>
            {direction === "row" ? "Horizontally" : "Vertically"}
          </Inline>
          <Inline>aligned</Inline>
        </H4>
        <Box mb={4}>
          <Button active={direction === "row"} onClick={() => this.setState({ direction: "row" })} mr={2}>row</Button>
          <Button active={direction === "column"} onClick={() => this.setState({ direction: "column" })} mr={2}>column</Button>
        </Box>
        
        <H4 mb={2} color="grayscale.1">
          <Inline color="accent" mr={1}>
            justify-content
          </Inline>
          <Inline mr={1}>aligns items along the</Inline>
          <Inline color="orange">major axis ({ direction === "row" ? "horizontal" : "vertical" })</Inline>
        </H4>
        <Box mb={4}>
          {justifys}
        </Box>

        <H4 mb={2} color="grayscale.1">
          <Inline color="accent" mr={1}>
            align-items
          </Inline>
          <Inline mr={1}>aligns items along the</Inline>
          <Inline color="purple">minor axis ({ direction === "row" ? "vertical" : "horizontal" })</Inline>
        </H4>
        <Box mb={5}>
          {aligns}
        </Box>

        <Flex fullWidth bg="red" justify={justify} align={align} flexDirection={direction}>
          <Item/>
          <Item/>
          <Item/>
        </Flex>        
      </Flex>
    )
  }
}

export default Index;