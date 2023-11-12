import "@mantine/core/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Metadata } from "next";
import "@mantine/code-highlight-lite/styles.css";

export const metadata: Metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <p>layout root</p>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
