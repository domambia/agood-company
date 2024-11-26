"use client";
import styled from "styled-components";
import { SearchBar } from "../SearchBar";
import {
  HouseIcon,
  VibrateIcon,
  StoreIcon,
  ChartNoAxesCombinedIcon,
  SettingsIcon,
  HeadsetIcon,
} from "lucide-react";
import { Paragraph } from "@/styles/app-common-styled";
import exp from "constants";

export const SideBar = styled.div`
  width: 17.5rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  margin: 0.2rem;
  border-radius: 0.3rem;
  position: fixed;
  top: 0;
  left: 0;
  /* z-index: 100; */
  transition: all 0.5s ease;
  color: #333;
  &.show {
  }
`;
export const SideBarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;
export const SideBarHeaderIcon = styled.div`
  font-size: 1.2rem;
  font-weight: semibold;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.main};
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
export const SideBarHeaderTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.secondary};
`;
export const SideBarSearch = styled.div``;
export const SideBarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
`;
export const SideBarMenu = styled.div``;
export const SideBarMenuItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  height: 56px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.highlight};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
  & > div {
    & > svg {
      display: flex;
      align-items: center;
      color: #7139ec;
    }
  }
`;
export const MenuItemIcon = styled.div``;
export const MenuItemTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.main};
`;
export const SideBarAdvertisement = styled.div``;

export const NavSeperator = styled.div``;
export const Heading = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const AdvertImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  margin-top: 1rem;
`;

export const SideNav = () => {
  return (
    <SideBar>
      <NavSeperator>
        <SideBarHeader>
          <SideBarHeaderIcon>AG</SideBarHeaderIcon>
          <SideBarHeaderTitle>AGoodCompany</SideBarHeaderTitle>
        </SideBarHeader>
        <SideBarSearch>
          <SearchBar />
        </SideBarSearch>
        <SideBarContent>
          <SideBarMenu>
            <SideBarMenuItem>
              <MenuItemIcon>
                <HouseIcon height={17} width={18} fillOpacity={10} />
              </MenuItemIcon>
              <MenuItemTitle>Home</MenuItemTitle>
            </SideBarMenuItem>

            <SideBarMenuItem>
              <MenuItemIcon>
                <VibrateIcon height={17} width={18} />
              </MenuItemIcon>
              <MenuItemTitle>Menu 1</MenuItemTitle>
            </SideBarMenuItem>
            <SideBarMenuItem>
              <MenuItemIcon>
                <StoreIcon height={17} width={18} />
              </MenuItemIcon>
              <MenuItemTitle>Menu 2</MenuItemTitle>
            </SideBarMenuItem>
            <SideBarMenuItem>
              <MenuItemIcon>
                <ChartNoAxesCombinedIcon height={17} width={18} />
              </MenuItemIcon>
              <MenuItemTitle>Menu 3</MenuItemTitle>
            </SideBarMenuItem>
          </SideBarMenu>
        </SideBarContent>
      </NavSeperator>
      <NavSeperator>
        <SideBarContent>
          <SideBarMenu>
            <SideBarMenuItem>
              <MenuItemIcon>
                <SettingsIcon height={17} width={18} />
              </MenuItemIcon>
              <MenuItemTitle>Settings</MenuItemTitle>
            </SideBarMenuItem>
            <SideBarMenuItem>
              <MenuItemIcon>
                <HeadsetIcon height={17} width={18} />
              </MenuItemIcon>
              <MenuItemTitle>Support</MenuItemTitle>
            </SideBarMenuItem>
          </SideBarMenu>
        </SideBarContent>
        <SideBarAdvertisement>
          <Heading>Feature Available now!</Heading>
          <Paragraph>
            Check out the new dashboard view. Pages now load faster.
          </Paragraph>
          <AdvertImage src="/cover.svg" alt="Feature" />
        </SideBarAdvertisement>
      </NavSeperator>
    </SideBar>
  );
};
