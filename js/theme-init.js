(() => {
  const savedTheme = localStorage.getItem("fieldnotes-theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (systemPrefersDark ? "dark" : "light");

  document.documentElement.dataset.theme = theme;
})();
