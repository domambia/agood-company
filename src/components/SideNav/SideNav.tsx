"use client";
import styled from "styled-components";

export const SideBar = styled.div`
  width: 280px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  margin: 0.2rem;
  position: fixed;
  top: 0;
  left: 0;
  /* z-index: 100; */
  transition: all 0.5s ease;
  color: #333;
  &.show {
  }
`;
export const SideBarHeader = styled.div``;
export const SideBarSearch = styled.div``;
export const SideBarContent = styled.div``;
export const SideBarFooter = styled.div``;
export const SideBarMenu = styled.div``;
export const SideBarMenuItem = styled.div``;

export const SideNav = () => {
  return (
    <SideBar>
      <SideBarHeader>Header</SideBarHeader>
      <SideBarSearch>Search</SideBarSearch>
      <SideBarContent>Content</SideBarContent>
      <SideBarFooter>Footer</SideBarFooter>
    </SideBar>
  );
};
