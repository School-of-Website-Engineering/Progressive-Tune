const prodPlugins =
  process.env.NODE_ENV === "production" ? ["transform-remove-console"] : [];

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    ...prodPlugins,
    [
      "import",
      { libraryName: "vant", libraryDirectory: "es", style: true },
      "vant",
    ],
  ],
};
