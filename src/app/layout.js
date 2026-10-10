import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://globalpensionpolicy.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Global Pension Policy — Official Member Settlement Portal",
    template: "%s | Global Pension Policy",
  },
  description:
    "Official website for former GPP members. Information regarding the settlement and distribution of Global Pension Policies for eligible former members.",
  keywords: [
    "GPP",
    "Global Pension Policy",
    "pension settlement",
    "former members",
    "pension distribution",
    "member verification",
  ],
  authors: [{ name: "Global Pension Policy" }],
  creator: "Global Pension Policy",
  publisher: "Global Pension Policy",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Global Pension Policy",
    title: "Global Pension Policy — Official Member Settlement Portal",
    description:
      "Official website for former GPP members. Settlement and distribution information for eligible former members.",
    images: [
      {
        url: "/gpp-logo.jpg",
        width: 1024,
        height: 1024,
        alt: "Global Pension Policy Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Global Pension Policy — Official Member Settlement Portal",
    description:
      "Official website for former GPP members. Settlement and distribution information.",
    images: ["/gpp-logo.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('gpp-theme');var t=s||(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();
            (function(){try{var obs=new MutationObserver(function(){var el=document.querySelector('iframe[src*="netlify"], iframe#netlify-drawer, #netlify-hud, [id*="netlify-drawer"], [data-netlify-drawer], [class*="netlify-hud"]');if(el){el.style.display='none';el.remove();}});obs.observe(document.documentElement,{childList:true,subtree:true});}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
