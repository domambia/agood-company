"use client";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
  width: 100%;
`;
export const Link = styled.a``;

export const Paragraph = styled.p`
  font-size: 14px;
  color: #000;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 400;
  line-height: 1.5;
`;
