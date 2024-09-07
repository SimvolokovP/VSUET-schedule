import { ComponentType } from "react";
import MainPage from "../pages/MainPage";
import SettingsPage from "../pages/SettingsPage";

export interface IRoute {
  path: string;
  component: ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  MAIN = "/",
  SETTINGS = "/settings",
}

export const routes: IRoute[] = [
  { path: RouteNames.MAIN, exact: true, component: MainPage },
  { path: RouteNames.SETTINGS, exact: true, component: SettingsPage },
];
