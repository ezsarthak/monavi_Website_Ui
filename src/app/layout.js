import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/forms/BookingModal";
import BookingInterceptor from "@/components/forms/BookingInterceptor";

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

export const metadata = {
  metadataBase: new URL("https://monavi.com"),
  title: "MONAVI | Bring Patients Back. Reduce Clinic Chaos.",
  description: "MONAVI helps clinics manage appointments, queues, follow-ups and patient communication while improving patient retention.",
  openGraph: {
    title: "MONAVI | Bring Patients Back. Reduce Clinic Chaos.",
    description: "MONAVI helps clinics manage appointments, queues, follow-ups and patient communication while improving patient retention.",
    url: "https://monavi.com",
    siteName: "MONAVI",
    images: [
      {
        url: "/monavi/monavi_logo.webp",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MONAVI | Bring Patients Back. Reduce Clinic Chaos.",
    description: "MONAVI helps clinics manage appointments, queues, follow-ups and patient communication while improving patient retention.",
    images: ["/monavi/monavi_logo.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-wf-site="696f017270bc35c55e784979" data-wf-page="696f017570bc35c55e7849ad">
      <head>
        <link
          href="/assets/favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="/assets/webclip.png"
          rel="apple-touch-icon"
        />
        <link rel="preload" as="image" href="/monavi/new_bg.webp" />
        <link rel="preload" as="image" href="/monavi/monavi_logo.webp" />
      </head>
      <body className={plusJakartaSans.className} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <BookingInterceptor />
        <BookingModal />
        <Script src="/js/jquery-3.5.1.min.dc5e7f18c8.js" strategy="afterInteractive" />
        <Script src="/js/webflow.schunk.36b8fb49256177c8.js" strategy="afterInteractive" />
        <Script src="/js/webflow.schunk.8208d3e53b97e3c7.js" strategy="afterInteractive" />
        <Script src="/js/webflow.schunk.57027dd40c40bf05.js" strategy="afterInteractive" />
        <Script src="/js/webflow.schunk.9dfb96661114d3db.js" strategy="afterInteractive" />
        <Script src="/js/webflow.53a613e1.0ca2f44de061a57d.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
