// @mui
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";

//
import { useLocales } from "./useLocales";

// ----------------------------------------------------------------------

interface Props {
  children: React.ReactNode;
}

export default function ThemeLocalization({
  children,
}: Props): React.ReactElement | null {
  const outerTheme = useTheme();

  const { currentLang } = useLocales();

  const theme = createTheme(outerTheme, currentLang.systemValue);

  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
}
