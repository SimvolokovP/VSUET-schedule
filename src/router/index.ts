import { ComponentType } from "react";
import MainPage from "../pages/MainPage";
import SettingsPage from "../pages/SettingsPage";
import { MdOutlineEventNote, MdOutlineSettings, MdSchedule } from "react-icons/md";
import NotesPage from "../pages/NotesPage";

export interface IRoute {
  path: string;
  component: ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  MAIN = "/",
  SETTINGS = "/settings",
  NOTES = "/notes"
}

export const routes: IRoute[] = [
  { path: RouteNames.MAIN, exact: true, component: MainPage },
  { path: RouteNames.SETTINGS, exact: true, component: SettingsPage },
  { path: RouteNames.NOTES, exact: true, component: NotesPage }
];

export const navLinks = [
  { path: RouteNames.MAIN, text: "Расписание", icon: MdSchedule },
  { path: RouteNames.NOTES, text: "Заметки", icon: MdOutlineEventNote },
  { path: RouteNames.SETTINGS, text: "Настройки", icon: MdOutlineSettings },
];
