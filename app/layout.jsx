import "@fontsource-variable/inter";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://nexrevenue.com"),
  title: "NexRevenue | Exclusive Final Expense Calls, Transfers & Leads",
  description:
    "Direct publisher of exclusive final expense inbound calls, live transfers and leads for U.S. agencies. Ethical ads, real consent, test first, then scale.",
  openGraph: {
    title: "NexRevenue | Final expense calls from people who know what they called about",
    description: "Exclusive inbound calls, live transfers and leads from a direct publisher. Test first. Scale together.",
    url: "https://nexrevenue.com",
    siteName: "NexRevenue",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
