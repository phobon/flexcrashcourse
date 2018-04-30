import React from "react";
import styled from "styled-components";

import { Box, Flex, H1, H4, Inline } from "../components";

class Composition extends React.Component {
  _itemGenerator = 0;

  static async getInitialProps() {
    return {
      leftItems: 5,
      rightItems: 10,
      cards: 5
    };
  }

  render = () => {
    const { leftItems, rightItems, cards } = this.props;

    return (
      <Flex fullWidth align="flex-start" flexDirection="column" px={4} pb={4}>
        <H1 color="grayscale.2" mb={2}>Composing layouts using flex</H1>
        <H4>Look for elements that<Inline color="accent" mx={1}>flow in a similar direction</Inline>and group them in rows or columns</H4>
        <H4>Start from the<Inline color="accent" mx={1}>outside container and work your way in</Inline></H4>
        <H4 mb={5}>Whiteboard/pen and paper are a good place to start</H4>

        <Flex fullWidth bg="grayscale.3" align="flex-start" justify="flex-start">
          <Box bg="red" fullHeight flexDirection="column" p={2}>
            {this.generateItems(leftItems)}
          </Box>
          <Flex flexWrap="wrap">
            {this.generateCards(cards)}
          </Flex>
          <Box bg="red" fullHeight flexDirection="column" p={2}>
            {this.generateItems(rightItems)}
          </Box>
        </Flex>
      </Flex>
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