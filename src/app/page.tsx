"use client";
import { Button } from "@/components/Button";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardTime,
  CardIcon,
  CardActions,
} from "@/components/Card";
import { Skeleton } from "@/components/Skeleton";
import { useLoading } from "@/hooks/useLoading";
import {
  FlexContainer,
  Heading,
  PageWrapper,
} from "@/styles/app-common-styled";
import { DotIcon, StarIcon, WavesIcon } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";

export default function Home() {
  const { isLoading } = useLoading();
  const [data, setData] = useState([
    "Item 1",
    "Item 2",
    "Item 3 , Item 3, Item Item 3, Item 3, Item 3",
    "Item 4",
    "Item 5,Item 5,Item 5 Item 5 Item 5 Item 5 Item 5 Item 5 Item 5 Item 5 Item 5 Item 5 Item 5 Item 5 Item 5",
    "Item 5, Item 5, Item 5, Item 5, Item 5, Item 5, Item 5, Item 5, Item 5, Item 5, ",
  ]);

  return (
    <PageWrapper>
      <FlexContainer>
        <Heading $level={5}> Your Items</Heading>
        <Heading $level={5}> Show All</Heading>
      </FlexContainer>

      <CardWrapper>
        {isLoading &&
          data.map((_item, index) => (
            <Card
              key={index}
              $backgroundcolor="#ffff"
              $padding="2rem"
              $borderradius="16px"
            >
              <CardHeader>
                <Skeleton width="100%" height="50px" withIcon={true} />
              </CardHeader>

              <CardHeader
                style={{
                  alignSelf: "flex-start",
                  gap: "0.3rem",
                  width: "21.5rem",
                }}
              >
                <Skeleton width="100%" height="20px" />
              </CardHeader>
              <CardBody style={{ width: "21.5rem" }}>
                <Skeleton width="100%" height="20px" />
              </CardBody>
              <CardActions>
                <Skeleton width="95px" height="42px" />
                <Skeleton width="60px" height="42px" />
              </CardActions>
            </Card>
          ))}

        {!isLoading &&
          data.map((item, index) => (
            <Card
              key={index}
              $backgroundcolor="#ffff"
              $padding="2rem"
              $borderradius="16px"
            >
              <CardHeader>
                <CardIcon $type="normal" $bgcolor="#F7F2FF">
                  <WavesIcon size={24} color="#793BF2" />
                </CardIcon>
                <CardIcon $type="rounded" $bgcolor="#F4F5F6">
                  <StarIcon size={24} color="#333" />
                </CardIcon>
              </CardHeader>

              <CardHeader style={{ alignSelf: "flex-start", gap: "0.3rem" }}>
                <CardTitle
                  style={{
                    color: "#656D76",
                    fontWeight: "normal",
                    display: "flex",
                    gap: "0.1rem",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <span>Timbuk2</span>
                  <DotIcon size={8} />
                </CardTitle>
                <CardTime>5 days ago</CardTime>
              </CardHeader>
              <CardBody>
                <p>
                  {item.length > 45 ? item.substring(0, 45) + "  ..." : item}
                </p>
              </CardBody>
              <CardActions>
                <Button $variant="primary" $color="#494F55">
                  Download
                </Button>
                <Button $variant="secondary" $color="#793BF2">
                  View
                </Button>
              </CardActions>
            </Card>
          ))}
      </CardWrapper>
    </PageWrapper>
  );
}

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  height: 100%;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
