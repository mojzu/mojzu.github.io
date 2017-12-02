module.exports = {
  head: {
    title: "Mojzu",
    titleTemplate: "%s - Mojzu",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Meta description" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },
  css: [
    "semantic-ui-css/semantic.min.css",
    "@/assets/main.scss",
  ],
  plugins: [
    "~/plugins/semantic-ui-vue",
  ],
};
