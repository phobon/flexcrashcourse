// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import { ThemeProvider, ServerStyleSheet } from 'styled-components';

import theme from '../theme';

export default class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`
            body, html { 
                width: 100vw;
                height: 100vh;
                margin: 0;
                padding: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                font-size: 8px;
            }
            body {
                font-size: 1.75rem;
            }
            * {
                box-sizing: border-box;
            }
            h1, h2, h3, h4, h5, h6, p {
                margin: 0;
                font-weight: 400;
            }
            
            h1 {    
                font-size: 3.75rem;
            }
            h2 {
                font-size: 3.35rem;
            }
            h3 {
                font-size: 2.95rem;
            }
            h4 {
                font-size: 2.575rem;
            }
            h5 {
                font-size: 2.55rem;
            }
            h6 {
                font-size: 2.1rem;
            }

            ul, li, ol {
                list-style: none;
                margin: 0;
                padding: 0;
            }

            #__next {
                width: 100%;
                height: 100%;
                display: flex;
                flex: none;
            }
          `}</style>
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}