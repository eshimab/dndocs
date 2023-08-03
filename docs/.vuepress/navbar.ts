import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  {
    text: "DND Manual",
    icon: "book",
    prefix: "/manual/",
    link: "/manual/README",
    children: [
      {
        text: "Characterizations",
        prefix: "Characterizations/",
        children: [
          "Alignment",
          "Backgrounds",
        ],
      },
    ],
  },
  "/demo/",
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);
