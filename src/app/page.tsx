import { Button } from "@/components/Button";
import { PageWrapper } from "@/styles/app-common-styled";

export default function Home() {
  return (
    <PageWrapper>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "16px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <Skeleton width="100%" height="200px" borderradius="8px" />
        <Skeleton width="60%" height="1.5em" borderradius="4px" />
        <Skeleton width="80%" height="1em" borderradius="4px" />
        <Skeleton width="70%" height="1em" borderradius="4px" />
      </div> */}
      {/* <div style={{ padding: "16px", display: "grid", gap: "16px" }}>
        <Skeleton width="100%" height="50px" withIcon={true} />
        <Skeleton width="100%" height="200px" />
        <Skeleton width="100%" height="20px" />
        <Skeleton width="100%" height="20px" />
        <Skeleton width="100%" height="20px" />
      </div> */}
      <Button $variant="primary">Primary Button</Button>
      <Button $variant="secondary">Secondary Button</Button>
      <Button $variant="icon">
        <svg>/* Icon SVG */</svg>
      </Button>
      <Button $variant="connect">Connect Button</Button>
      <Button $variant="nav" $isActive>
        Navigation Button
      </Button>
    </PageWrapper>
  );
}
