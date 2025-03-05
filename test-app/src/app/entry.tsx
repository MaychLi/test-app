import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {router} from "./routing/router";
import "./assets/styles.scss";
import {theme} from "./theme/main";
import {ThemeProvider} from "@emotion/react";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./requests/queryClient";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
