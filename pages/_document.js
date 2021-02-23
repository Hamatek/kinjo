import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import {
  getDefaultContext,
  setDefaultContext
} from "../styles/createDefaultContext";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    setDefaultContext();
    const page = ctx.renderPage();
    const styleContext = getDefaultContext();
    return {
      ...page,
      styles: (
        <style
          id="jss-server-side"
          dangerouslySetInnerHTML={{
            __html: styleContext.styleManager.sheetsToString()
          }}
        />
      )
    };
  }

  render() {
    const styleContext = getDefaultContext();
    return (
      <html lang="fr">
        <Head>
          <title>Editeur de Carte Kinjo</title>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content={
              "user-scalable=0, initial-scale=1, maximum-scale=1, " +
              "minimum-scale=1, width=device-width, height=device-height, user-scalable=no"
            }
          />
          {/* PWA primary color */}
          <meta
            name="theme-color"
            content={styleContext.theme.palette.primary[500]}
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />

          <script src="https://smtpjs.com/smtp.js" />
          <link
            href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.css"
            rel="stylesheet"
          />
          <style>{`
      body { 
      //  background:url(/static/old_moon.png);
      background-color: #fff;
      }
      .mapboxgl-ctrl-compass {
                        display: none !important;
                  }
    `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
