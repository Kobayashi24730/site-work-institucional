import { useState, type ReactNode } from "react";

type IconName =
  | "arrow"
  | "automation"
  | "check"
  | "chevron"
  | "clock"
  | "headset"
  | "inbox"
  | "menu"
  | "message"
  | "people"
  | "play"
  | "report"
  | "shield"
  | "sparkle"
  | "whatsapp"
  | "x";
  
const paths: Record<IconName, ReactNode> = {
  arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
  automation: <><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /><circle cx="12" cy="12" r="5" /><path d="m7 5 2 2M15 17l2 2M17 5l-2 2M9 17l-2 2" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m8 10 4 4 4-4" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  headset: <><path d="M4 13v-2a8 8 0 0 1 16 0v2" /><path d="M4 13h3v6H5a1 1 0 0 1-1-1v-5ZM20 13h-3v6h2a1 1 0 0 0 1-1v-5ZM17 19c0 1.1-.9 2-2 2h-2" /></>,
  inbox: <><path d="M4 5h16v14H4z" /><path d="M4 14h4l2 2h4l2-2h4" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  message: <path d="M21 12a8 8 0 0 1-9 8 9 9 0 0 1-4-.9L3 21l1.8-4A8 8 0 1 1 21 12Z" />,
  people: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5" /></>,
  play: <path d="m9 7 8 5-8 5V7Z" />,
  report: <><path d="M5 20V10M12 20V4M19 20v-7" /><path d="M3 20h18" /></>,
  shield: <><path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  sparkle: <><path d="m12 3 1.2 4.1L17 9l-3.8 1.9L12 15l-1.2-4.1L7 9l3.8-1.9L12 3Z" /><path d="m18 15 .6 2.2L21 18l-2.4.8L18 21l-.6-2.2L15 18l2.4-.8L18 15Z" /></>,
  whatsapp: <><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.7l1.6-4.6A8.5 8.5 0 1 1 20.5 11.7Z" /><path d="M8.2 7.6c.3-.3.7-.2.9.2l1 2c.1.3.1.5-.1.7l-.7.8c.7 1.5 1.8 2.6 3.3 3.3l.8-.8c.2-.2.5-.2.7-.1l1.9.9c.4.2.5.6.3.9-.5.9-1.5 1.3-2.5 1.1a9.4 9.4 0 0 1-6.5-6.2c-.3-1 0-2 .9-2.8Z" /></>,
  x: <path d="m6 6 12 12M18 6 6 18" />,
};
