import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "@/pages/HomePage";
import {Layout} from "@/shared/ui";
import {Header} from "@/widgets/Header";

export const router = createBrowserRouter([
  {
    element: <Layout header={<Header />} />,
    errorElement: <div className="error-text">Error</div>,
    children: [
      {
        path: "/",
        element: <HomePage />
      }
    ]
  }
]);
