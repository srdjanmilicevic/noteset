import type { OAuthBtnProps, WorkoutProps } from "../types/types";
import { GoogleSvg, TwitterSvg, DiscordSvg } from "../components/svg";

export const oAuthButtons: OAuthBtnProps[] = [
  { buttonSvg: GoogleSvg, buttonText: "Google" },
  { buttonSvg: TwitterSvg, buttonText: "Twitter" },
  { buttonSvg: DiscordSvg, buttonText: "Discord" },
];

export const initWorkout: WorkoutProps = {
  id: -1,
  title: "New title",
  description: "New description",
};

//Variant for framer motion animations
export const optionsMenuVariant = {
  hidden: {
    opacity: 0,
  },
  "fade-in": {
    opacity: 1,
    transition: { duration: 0.1, ease: "easeOut" },
  },
  "fade-out": {
    opacity: 0,
    transition: { delay: 0.15, duration: 0.15, ease: "easeIn" },
  },

  "most-right": { x: "100%" },
  "slide-in": {
    x: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  "slide-out": {
    x: "100%",
    transition: { delay: 0.15, duration: 0.15, ease: "easeIn" },
  },
};

