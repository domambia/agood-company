"use client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@/styles";
import { Wrapper } from "../Main/Wrapper";

interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  );
};
