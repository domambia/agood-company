"use client";
import { Container } from "@/styles/app-common-styled";
import styled from "styled-components";
import { SideBar, SideNav } from "../SideNav/SideNav";
import React from "react";

interface WrapperProps {
  children?: React.ReactNode;
}
export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Container>
      <AppPageWrapper>
        <SideBar>
          <SideNav />
        </SideBar>
      </AppPageWrapper>

      <AppPageContent>{children}</AppPageContent>
    </Container>
  );
};

export const AppPageWrapper = styled.div``;
export const AppPageContent = styled.div``;
