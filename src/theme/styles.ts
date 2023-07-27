export const styles = {
  global: {
    "#root": {
      minH: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    "html, body": {
      background: "light.background",
      color: "light.emphasis",

      _dark: {
        backgroundColor: "dark.background",
      },
    },
  },
};
