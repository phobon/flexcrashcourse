import App, { Container } from 'next/app'
import React from 'react'
import Link from "next/link";

import styled, { injectGlobal, ThemeProvider } from "styled-components";

import theme from "../theme";
import { Box, Anchor, H4 } from "../components";

const Navigation = Box.extend`
    > * {
        margin-right: 2rem;
    }
`;

export default class FlexCrash extends App {
  static async getInitialProps ({ Component, router, ctx }) {
      let pageProps = {};

      if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx);
      }

      return { pageProps };
  }

  render () {
      const { Component, pageProps, router } = this.props;

      return (
          <ThemeProvider theme={theme}>
            <Box flexDirection="column" fullWidth fullHeight justify="flex-start" align="flex-start">
              <Navigation px={4} py={3} mb={4} justify="flex-start" fullWidth borderBottom="1px solid" borderColor="grayscale.3">
                <H4 mr={4}>Flex Crash Course</H4>
                <Link href="/"><a>Overview</a></Link>
                <Link href="/composition"><a>Composition</a></Link>
                <Link href="/positioning"><a>Positioning</a></Link>
                <Link href="/sizing"><a>Sizing</a></Link>
              </Navigation>
              <Container>
                <Component 
                    {...pageProps} 
                    {...this.state} />
              </Container>
            </Box>
          </ThemeProvider>
      )
  }
}