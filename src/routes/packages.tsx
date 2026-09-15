import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import "../styles/elite.css";
import bodyHtml from "../content/packages-body.html?raw";
import pageScript from "../content/elite-script.js?raw";

export const Route = createFileRoute("/packages")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Package Prices | Elite Cleaners Johannesburg" },
      {
        name: "description",
        content:
          "Simple, upfront package prices for home cleaning in Johannesburg. One clear price per package — products and equipment included, no hourly charges.",
      },
      { property: "og:title", content: "Package Prices | Elite Cleaners Johannesburg" },
      {
        property: "og:description",
        content:
          "One clear price per cleaning package. Products and equipment included, no hourly calculations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_ZA" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Nunito+Sans:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  useEffect(() => {
    try {
      new Function(pageScript)();
    } catch (err) {
      console.error("Elite Cleaners page script failed", err);
    }
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
