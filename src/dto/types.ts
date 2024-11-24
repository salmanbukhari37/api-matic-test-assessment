import { RouteObject } from "react-router-dom";

export type AppRoute = RouteObject & {
  label?: string;
  element: JSX.Element;
};
