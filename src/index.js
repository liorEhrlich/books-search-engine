import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, Global, css } from "@emotion/react";

import App from "./App";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Global
        styles={css`
              body {
                background-color: ${theme.colors.primaryBackground};
                margin: 0;
                padding: 0;
              }
            `}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
