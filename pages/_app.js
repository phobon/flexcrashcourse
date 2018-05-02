import App, { Container } from 'next/app'
import React from 'react'
import Link from "next/link";

import styled, { injectGlobal, ThemeProvider } from "styled-components";

import theme from "../theme";
import { Box, Anchor, H4 } from "../components";

const Navigation = Box.extend`
    position: fixed;
    left: 0;
    top: 0;
    
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
              <Navigation bg="white" px={4} py={3} justify="flex-start" fullWidth borderBottom="4px dashed" borderColor="grayscale.3">
                <H4 mr={4}>Flex Crash Course</H4>
                <Link href="/"><a>Overview</a></Link>
                <Link href="/alignment"><a>Alignment</a></Link>
                <Link href="/sizing"><a>Size</a></Link>
                <Link href="/composition"><a>Composition</a></Link>                
                <Link href="/cheatsheet"><a>Cheat Sheet</a></Link>
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