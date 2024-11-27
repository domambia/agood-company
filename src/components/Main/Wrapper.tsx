"use client";
import styled from "styled-components";
import { SideBar, SideNav } from "../SideNav/SideNav";
import React, { useState } from "react";
import { devices } from "@/styles";
import { useLoading } from "@/hooks/useLoading";

interface WrapperProps {
  children?: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const [toggle, setToggle] = useState("false");

  const { isLoading } = useLoading();
  const handleToggle = () => {
    if (toggle === "false") {
      setToggle("true");
    } else {
      setToggle("false");
    }
  };

  return (
    <MainWrapper>
      <SideBarWrapper $toggle={toggle}>
        <SideBar onClick={() => handleToggle()} $toggle={toggle}>
          <SideNav $toggle={toggle} />
        </SideBar>
      </SideBarWrapper>

      <ContentWrapper $toggle={toggle} $isLoading={isLoading}>
        {children}
      </ContentWrapper>
    </MainWrapper>
  );
};

export const MainWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: 0;
`;

export const SideBarWrapper = styled.div<{ $toggle: string }>`
  width: ${({ $toggle }) => ($toggle == "false" ? "20%" : "6%")};
  background-color: #f4f4f4;
  border-right: 1px solid #e0e0e0;
  @media ${devices.mobile} {
    display: none;
  }
`;

export const ContentWrapper = styled.div<{
  $toggle: string;
  $isLoading: boolean;
}>`
  width: ${({ $toggle }) => ($toggle == "false" ? "80%" : "95%")};
  flex-grow: 1;
  margin: 0.2rem;
  border-radius: 0.3rem;
  padding: 0.8rem 0.5rem;
  overflow-y: auto;
  background-color: ${({ $isLoading }) => ($isLoading ? "#fbf2fb" : "")};
  height: ${({ $isLoading }) => ($isLoading ? "100vh" : "")};

  @media ${devices.mobile} {
    width: 100% !important;
  }
`;
