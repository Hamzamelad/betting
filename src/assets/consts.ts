import { icons } from "@/components/icons";

type BetPage = {
  name: string;
  href: string;
  tabs: {
    name: string;
    href: string;
    icon: any;
  }[];
};

export const betPages: BetPage[] = [
  {
    name: "sports",
    href: "/sports",
    tabs: [
      {
        name: "football",
        href: "/sports/football",
        icon: icons.sport,
      },
      {
        name: "tennis",
        href: "/sports/tennis",
        icon: icons.sport,
      },
      {
        name: "basketball",
        href: "/sports/basketball",
        icon: icons.sport,
      },
    ],
  },
  {
    name: "e-sports",
    href: "/e-sports",
    tabs: [
      {
        name: "cs2",
        href: "/e-sports/cs2",
        icon: icons.sport,
      },
      {
        name: "valorant",
        href: "/e-sports/valorant",
        icon: icons.sport,
      },
      {
        name: "rocket league",
        href: "/e-sports/rocket-league",
        icon: icons.sport,
      },
    ],
  },
  {
    name: "casino",
    href: "/casino",
    tabs: [],
  },
];
