"use client";
import React from "react";
import styled, { keyframes } from "styled-components";

const shimmerAnimation = keyframes`
  0% {
    background-color: #f0f0f0;
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f0f0f0;
  }
`;

const SkeletonWrapper = styled.div<{
  width?: string;
  height?: string;
  borderradius?: string;
}>`
  display: inline-block;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "1em"};
  border-radius: ${({ borderradius }) => borderradius || "4px"};
  animation: ${shimmerAnimation} 1.5s infinite ease-in-out;
`;

const SkeletonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconPlaceholder = styled(SkeletonWrapper)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const TextPlaceholder = styled(SkeletonWrapper)`
  flex: 1;
`;

type SkeletonProps = {
  width?: string;
  height?: string;
  borderradius?: string;
  withIcon?: boolean;
};

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  borderradius,
  withIcon,
}) => {
  if (withIcon) {
    return (
      <SkeletonContainer>
        <IconPlaceholder />
        <TextPlaceholder width={width} height={"20px"} />
      </SkeletonContainer>
    );
  }
  return (
    <SkeletonWrapper
      width={width}
      height={height}
      borderradius={borderradius}
    />
  );
};
