import React from "react";
import styled from "styled-components";

import { Box, Flex, H1, H4, Inline } from "../components";

class Composition extends React.Component {
  _itemGenerator = 0;

  static async getInitialProps() {
    return {
      leftItems: 5,
      rightItems: 10,
      cards: 8
    };
  }

  render = () => {
    const { leftItems, rightItems, cards } = this.props;

    return (
      <>
        <Box mx={4} mb={5} flexDirection="column" align="flex-start">
          <H1 color="grayscale.2" mb={2}>Composing layouts using flex</H1>
          <H4>Look for elements that<Inline color="accent" mx={1}>flow in a similar direction</Inline>and group them in rows or columns</H4>
          <H4>Start from the<Inline color="accent" mx={1}>outside container and work your way in</Inline></H4>
          <H4>Whiteboard/pen and paper are a good place to start</H4>
        </Box>
          
        <Flex fullWidth fullHeight align="flex-start" justify="flex-start" pb={4} style={{ overflow: "hidden" }}>
          <Box bg="red" flexDirection="column" p={2} fullHeight justify="flex-start" ml={4}>
            {this.generateItems(leftItems)}
          </Box>
          <Flex flexWrap="wrap" bg="grayscale.3" justify="flex-start">
            {this.generateCards(cards)}
          </Flex>
          <Box bg="red" fullHeight flexDirection="column" p={2} justify="flex-end" mr={4}>
            {this.generateItems(rightItems)}
          </Box>
        </Flex>
      </>
    )
  };

  generateCards = (count) => {
    const cards = [];
    for (let i = 0; i < count; i++) {
      cards.push(<Box key={`card_${i}`} height="30rem" m={3} bg="purple" width="20rem"/>);
    }

    return cards;
  };

  generateItems = (count) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(<Box key={`item_${this._itemGenerator}_${i}`} height="5rem" mb={2} bg="yellow" width="20rem"/>);
    }

    this._itemGenerator++;
    return items;
  };
}

export default Composition;