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
import React from "react";
import { devices } from "@/styles";
import { useLoading } from "@/hooks/useLoading";
import { Skeleton } from "../Skeleton";

export const SideBar = styled.div<{ $toggle: string }>`
  width: ${({ $toggle }) => ($toggle == "false" ? "17.5rem" : "5.0625rem")};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary || "#fff"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.5s ease;
  padding: ${({ $toggle }) => ($toggle == "false" ? "1rem" : "0.5rem")};
  margin: 0.2rem;
  border-radius: 0.3rem;
  position: fixed;
  top: 0;
  left: 0;
  color: #333;

  @media ${devices.mobile} {
    display: none;
  }
`;
export const SideBarHeader = styled.div<{ $toggle: string }>`
  display: flex;
  align-items: center;
  justify-content: ${({ $toggle }) => ($toggle === "false" ? "" : "center")};
  gap: 1rem;
  margin-bottom: 1rem;

  & > div {
    &:last-child {
      display: ${({ $toggle }) => ($toggle === "false" ? "block" : "none")};
    }
  }
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
export const SideBarSearch = styled.div<{ $toggle: string }>`
  input {
    display: ${({ $toggle }) => ($toggle === "false" ? "block" : "none")};
    width: 100%;
  }
`;
export const SideBarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
`;
export const SideBarMenu = styled.div``;
export const SideBarMenuItem = styled.div<{
  $isactive?: string;
  $toggle: string;
}>`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  position: relative;
  height: 56px;
  cursor: pointer;
  transition: all 0.5s ease;
  background-color: ${({ theme, $isactive }) =>
    $isactive === "true" ? theme.colors.highlight : "$fff"};
  &:hover {
    background-color: ${({ theme }) => theme.colors.highlight};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
  p {
    display: ${({ $toggle }) => ($toggle == "false" ? "block" : "none")};
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
export const SideBarAdvertisement = styled.div<{ $toggle: string }>`
  display: ${({ $toggle }) => ($toggle == "false" ? "block" : "none")};
`;

export const NavSeperator = styled.div``;
export const HeadingAdvert = styled.h1`
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

const LeftIndicator = styled.div`
  width: 4px;
  height: 60%;
  background-color: #7139ec;
  border-radius: 0 8px 8px 0;
  position: absolute;
  left: 0;
`;

interface SideNavProps {
  $toggle: string;
}

export const SideNav: React.FC<SideNavProps> = ({ $toggle }) => {
  const { isLoading } = useLoading();
  return isLoading ? (
    <SideBar $toggle={$toggle}>
      <NavSeperator>
        <SideBarHeader
          $toggle={$toggle}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Skeleton width="82%" withIcon height="45px" isDouble={true} />
        </SideBarHeader>
        <Skeleton width="100%" height="56px" isDouble={true} />
        <SideBarContent>
          <SideBarMenu>
            <Skeleton width="100%" height="56px" isDouble={true} />
            <Skeleton width="100%" height="56px" isDouble={true} />
            <Skeleton width="100%" height="56px" isDouble={true} />
            <Skeleton width="100%" height="56px" isDouble={true} />
          </SideBarMenu>
        </SideBarContent>
      </NavSeperator>
      <NavSeperator>
        <SideBarContent>
          <SideBarMenu>
            <Skeleton width="100%" height="56px" isDouble={true} />
            <Skeleton width="100%" height="56px" isDouble={true} />
          </SideBarMenu>
        </SideBarContent>
        <SideBarAdvertisement $toggle={$toggle}>
          <Skeleton width="100%" height="10px" />
          <Skeleton width="100%" height="8px" />
          <Skeleton width="100%" height="8px" />
          <Skeleton width="100%" height="150px" />
        </SideBarAdvertisement>
      </NavSeperator>
    </SideBar>
  ) : (
    <SideBar $toggle={$toggle}>
      <NavSeperator>
        <SideBarHeader $toggle={$toggle}>
          <SideBarHeaderIcon>AG</SideBarHeaderIcon>
          <SideBarHeaderTitle>AGoodCompany</SideBarHeaderTitle>
        </SideBarHeader>
        <SideBarSearch $toggle={$toggle}>
          <SearchBar />
        </SideBarSearch>
        <SideBarContent>
          <SideBarMenu>
            <SideBarMenuItem $isactive={true.toString()} $toggle={$toggle}>
              <LeftIndicator />
              <MenuItemIcon>
                <HouseIcon height={17} width={18} fillOpacity={10} />
              </MenuItemIcon>
              <MenuItemTitle>Home</MenuItemTitle>
            </SideBarMenuItem>

            <SideBarMenuItem $toggle={$toggle}>
              <MenuItemIcon>
                <VibrateIcon height={17} width={18} />
              </MenuItemIcon>
              <MenuItemTitle>Menu 1</MenuItemTitle>
            </SideBarMenuItem>
            <SideBarMenuItem $toggle={$toggle}>
              <MenuItemIcon>
                <StoreIcon height={17} width={18} />
              </MenuItemIcon>
              <MenuItemTitle>Menu 2</MenuItemTitle>
            </SideBarMenuItem>
            <SideBarMenuItem $toggle={$toggle}>
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
            <SideBarMenuItem $toggle={$toggle}>
              <MenuItemIcon>
                <SettingsIcon height={17} width={18} />
              </MenuItemIcon>
              <MenuItemTitle>Settings</MenuItemTitle>
            </SideBarMenuItem>
            <SideBarMenuItem $toggle={$toggle}>
              <MenuItemIcon>
                <HeadsetIcon height={17} width={18} />
              </MenuItemIcon>
              <MenuItemTitle>Support</MenuItemTitle>
            </SideBarMenuItem>
          </SideBarMenu>
        </SideBarContent>
        <SideBarAdvertisement $toggle={$toggle}>
          <HeadingAdvert>Feature Available now!</HeadingAdvert>
          <Paragraph>
            Check out the new dashboard view. Pages now load faster.
          </Paragraph>
          <AdvertImage src="/cover.svg" alt="Feature" />
        </SideBarAdvertisement>
      </NavSeperator>
    </SideBar>
  );
};
