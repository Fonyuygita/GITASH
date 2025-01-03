export const toggleDarkMode = (
  isDarkMode: boolean,
  setIsDarkMode: (mode: boolean) => void
): void => {
  setIsDarkMode(!isDarkMode);
  document.documentElement.classList.toggle("dark", !isDarkMode);
};
