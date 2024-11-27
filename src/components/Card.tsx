"use client";
import { devices } from "@/styles";
import styled from "styled-components";

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardTitle = styled.h2`
  font-size: 14px;
  color: #656d76;
`;
export const CardTime = styled.div`
  font-size: 14px;
  color: #656d76;
`;
export const CardBody = styled.div``;
export const CardActions = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  &:last-child {
    align-self: flex-end;
  }
`;
export const CardIcon = styled.div<{ $type: string; $bgcolor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: ${({ $type }) => {
    switch ($type) {
      case "rounded":
        return "50%";
      default:
        return "8%";
    }
  }};
  background-color: ${({ $bgcolor }) => $bgcolor?.toLowerCase() || "#ffffff"};
  color: #ffffff;
`;

export const Card = styled.div<{
  $padding?: string;
  $borderradius?: string;
  $shadow?: string;
  $backgroundcolor?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid #e4e5e7;
  overflow: hidden;
  width: 23.03125rem;
  height: 17rem;
  background-color: ${({ $backgroundcolor }) => $backgroundcolor || "#ffffff"};
  padding: ${({ $padding }) => $padding || "1rem"};
  border-radius: ${({ $borderradius }) => $borderradius || "8px"};
  box-shadow: ${({ $shadow }) => $shadow || "0 1px 2px rgba(0, 0, 0, 0.1)"};
  flex: 1 1 calc(33.33% - 0.5rem);
  max-width: calc(33.33% - 0.5rem);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  }

  @media ${devices.mobile} {
    flex: 1 1 100%;
    max-width: 100%;
    height: 17rem;
  }
`;
