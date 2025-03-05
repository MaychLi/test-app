import {Outlet} from "react-router-dom";
import {LayoutProps} from "./types";

export const Layout = ({header}: LayoutProps) => {
  return (
    <>
      {header}
      <Outlet />
    </>
  );
};
