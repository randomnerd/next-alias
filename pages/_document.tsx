import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

  class MyDocument extends Document {
  //   static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
  //     const originalRenderPage = ctx.renderPage
  //     const enhanceComponent = withStart(pageLoaded as any);

  //     ctx.renderPage = () =>
  //       originalRenderPage({
  //         // useful for wrapping the whole react tree
  //         // enhanceApp: (App) => App,
  //         // useful for wrapping in a per-page basis
  //         enhanceComponent: async (Component) => enhanceComponent(Component),
  //       })

  //     // Run the parent `getInitialProps`, it now includes the custom `renderPage`
  //     const initialProps = await Document.getInitialProps(ctx)

  //     return initialProps

  //   }
  // }
    render() {
      return (
        <Html lang="en">
          <Head />
            <Main />
            <NextScript />
        </Html>
      )
    }
  }

  export default MyDocument
