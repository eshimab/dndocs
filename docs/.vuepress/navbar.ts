import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  {
    text: "DND Manual",
    icon: "book",
    prefix: "/manual/",
    link: "/manual/README",
    children: [
      //
      // Begin Equipment
      {
        text: "Equipment",
        prefix: "Equipment/",
        children: [
          "Armor",
          "Coinage",
          "Expenses",
          "Gear",
          "Selling Treasure",
          "Tools",
          "Trade Goods",
          "Transportation",
          "Weapons",
        ], // end children.Equipment
      }, // end Equipment
      //
      // Begin Gamemastering
      {
        text: "Gamemastering",
        prefix: "Gamemastering/",
        children: [
          "Conditions",
        ],
      },
    ], // end children DND Manual
  }, // end DND Manual
  // Begin manual/Characterizations
  {
    text: "Characterizations",
    prefix: "/manual/Characterizations/",
    children: [
      "Alignment",
      "Backgrounds",
      "Beyond 1st Level",
      "Feats",
      "Inspiration",
      "Languages",
      "Multiclassing",
    ], // end children.Characterizations
  }, // end Characterizations
  // Begin Classes
  {
    text: "Classes",
    prefix: "/manual/Classes/",
    children: [
      "Barbarian",
      "Bard",
      "Cleric",
      "Druid",
      "Fighter",
      "Monk",
      "Paladin",
      "Ranger",
      "Rogue",
      "Sorcerer",
      "Warlock",
      "Wizard",
    ], // end children.Classes
  },
  //
  //
  // "/demo/",
  // {
  //   text: "Guide",
  //   icon: "lightbulb",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "lightbulb",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "lightbulb",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
  //     },
  //   ],
  // },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);
