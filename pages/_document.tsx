import 'source-map-support/register'
import Document, { Html, Head, NextScript, Main } from 'next/document'
import { withFork } from "effector-next";
import React from 'react';
// import { pageLoaded } from "../models";

const enhance = withFork({ debug: false });

// const BackgroundPattern = ({ children }: any) => {
//   return (
//     <body className="h-screen bg-gradient-to-bl from-white to-purple-100 bg-cover bg-fixed bg-no-repeat bg-100-50 overflow-x-hidden">
//       {children}
//     </body>
//   )
// }


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
          <title>ALIAS</title>
          <meta name="description" content="ALIAS game"/>
          <Main />
          <NextScript />
      </Html>
    )
  }
}

  export default enhance(MyDocument)