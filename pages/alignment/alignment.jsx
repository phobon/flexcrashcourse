import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Box, Flex, H1, H4, Button, Inline, ButtonGroup, BoxItem, FlexItem, Page, Text } from '../../components';
import * as md from "../../components/markdown";
import Content from "./content.md";

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

class Alignment extends React.Component {
  state = { 
    align: "center",
    justify: "center",
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
      <Page content={
          <Content components={{
            h1: md.H1, h2: md.H2, h3: md.H3, h4: md.H4, p: md.P, code: md.Code, ul: md.Ul
          }}/>
        }>
        <Box mb={2} fontSize={2}>
          <Inline color="accent" mr={1}>
            {direction === "row" ? "Horizontally" : "Vertically"}
          </Inline>
          <Inline>oriented</Inline>
        </Box>
        <ButtonGroup>
          <Button active={direction === "row"} onClick={() => this.setState({ direction: "row" })} mr={2}>row</Button>
          <Button active={direction === "column"} onClick={() => this.setState({ direction: "column" })} mr={2}>column</Button>
        </ButtonGroup>
        
        <Box mb={2} fontSize={2}>
          <Inline color="accent" mr={1}>
            justify-content
          </Inline>
          <Inline mr={1}>aligns items along the</Inline>
          <Inline color="orange">major axis ({ direction === "row" ? "horizontal" : "vertical" })</Inline>
        </Box>
        <ButtonGroup mb={4}>
          {justifys}
        </ButtonGroup>

        <Box mb={2} fontSize={2}>
          <Inline color="accent" mr={1}>
            align-items
          </Inline>
          <Inline mr={1}>aligns items along the</Inline>
          <Inline color="purple">minor axis ({ direction === "row" ? "vertical" : "horizontal" })</Inline>
        </Box>
        <ButtonGroup mb={5}>
          {aligns}
        </ButtonGroup>

        <Flex fullWidth fullHeight bg="grayscale.3" justify={justify} align={align} flexDirection={direction}>
          <BoxItem/>
          <BoxItem/>
          <BoxItem/>
        </Flex> 
      </Page>
    )

    // return (
    //   <Flex fullWidth flexDirection="column" px={4} pb={4} justify="flex-start" align="flex-start">
    //     <H1 color="grayscale.2">Positioning elements</H1>

    //     <H4 mb={2} color="grayscale.1">
    //       <Inline color="accent" mr={1}>
    //         {direction === "row" ? "Horizontally" : "Vertically"}
    //       </Inline>
    //       <Inline>aligned</Inline>
    //     </H4>
    //     <ButtonGroup>
    //       <Button active={direction === "row"} onClick={() => this.setState({ direction: "row" })} mr={2}>row</Button>
    //       <Button active={direction === "column"} onClick={() => this.setState({ direction: "column" })} mr={2}>column</Button>
    //     </ButtonGroup>
        
    //     <H4 mb={2} color="grayscale.1">
    //       <Inline color="accent" mr={1}>
    //         justify-content
    //       </Inline>
    //       <Inline mr={1}>aligns items along the</Inline>
    //       <Inline color="orange">major axis ({ direction === "row" ? "horizontal" : "vertical" })</Inline>
    //     </H4>
    //     <ButtonGroup mb={4}>
    //       {justifys}
    //     </ButtonGroup>

    //     <H4 mb={2} color="grayscale.1">
    //       <Inline color="accent" mr={1}>
    //         align-items
    //       </Inline>
    //       <Inline mr={1}>aligns items along the</Inline>
    //       <Inline color="purple">minor axis ({ direction === "row" ? "vertical" : "horizontal" })</Inline>
    //     </H4>
    //     <ButtonGroup mb={5}>
    //       {aligns}
    //     </ButtonGroup>

    //     <Flex fullWidth bg="grayscale.3" justify={justify} align={align} flexDirection={direction}>
    //       <BoxItem/>
    //       <BoxItem/>
    //       <BoxItem/>
    //     </Flex>        
    //   </Flex>
    // )
  }
}

export default Alignment;