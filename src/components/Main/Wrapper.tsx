"use client";
import styled from "styled-components";
import { SideBar, SideNav } from "../SideNav/SideNav";
import React from "react";

interface WrapperProps {
  children?: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <MainWrapper>
      <SideBarWrapper>
        <SideBar>
          <SideNav />
        </SideBar>
      </SideBarWrapper>

      <ContentWrapper>{children}</ContentWrapper>
    </MainWrapper>
  );
};

export const MainWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  margin: 0;
`;

export const SideBarWrapper = styled.div`
  width: 20%;
  background-color: #f4f4f4;
  border-right: 1px solid #e0e0e0;
`;

export const ContentWrapper = styled.div`
  width: 80%;
  flex-grow: 1;
  margin: 0.2rem;
  border-radius: 0.3rem;
  padding: 1rem;
  overflow-y: auto;
`;
