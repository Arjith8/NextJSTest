import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/app/ui/global.css";
import { inter } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
