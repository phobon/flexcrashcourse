import React from "react";
import styled from "styled-components";

import { Box, Flex, Inline, Page, BoxItem, FlexItem } from "../../components";

import Content from "./content.md";
import * as md from "../../components/markdown";

class Composition extends React.Component {
  _itemGenerator = 0;

  static async getInitialProps() {
    return {
      leftItems: 3,
      rightItems: 3,
      cards: 3
    };
  }

  render = () => {
    const { leftItems, rightItems, cards } = this.props;

    return (
      <Page content={
          <Content components={{
            h1: md.H1, h2: md.H2, h3: md.H3, h4: md.H4, p: md.P, code: md.Code, ul: md.Ul
          }}/>}>
          
        <Box height="40%" fullWidth align="flex-start" justify="flex-start">
          <Box bg="purple" flexDirection="column" p={2} fullHeight justify="flex-start">
            {this.generateItems(leftItems)}
          </Box>
          <Flex flexWrap="wrap" bg="orange" justify="flex-start" align="flex-start" fullHeight>
            {this.generateCards(cards)}
          </Flex>
          <Box bg="purple" fullHeight flexDirection="column" p={2} justify="flex-end">
            {this.generateItems(rightItems)}
          </Box>
        </Box>

        <Box fullWidth bg="grayscale.3" mt={4}>
          <BoxItem/>
          <FlexItem/>          
          <BoxItem/>
        </Box>

        <Box fullWidth bg="grayscale.3" mt={4}>
          <FlexItem/>
          <BoxItem/>
          <BoxItem/>
        </Box>

        <Box fullWidth bg="grayscale.3" mt={4}>
          <BoxItem/>
          <BoxItem/>
          <FlexItem/>
        </Box>
      </Page>
    )
  };

  generateCards = (count) => {
    const cards = [];
    for (let i = 0; i < count; i++) {
      cards.push(<Box key={`card_${i}`} height="25rem" m={3} bg="purple" width="20rem"/>);
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