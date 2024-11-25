import type { Metadata } from "next";
import "./globals.css";
import { BaseLayout } from "@/components/wraps/BaseLayout";

const metadata: Metadata = {
  title: "A Good Company",
  description: "A Good Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
