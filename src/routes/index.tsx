import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import "../styles/elite.css";
import bodyHtml from "../content/elite-body.html?raw";
import pageScript from "../content/elite-script.js?raw";
import ldJson from "../content/elite-ld.json?raw";


export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Elite Cleaners | Home & Corporate Cleaning Johannesburg" },
      {
        name: "description",
        content:
          "Professional home, laundry and corporate cleaning in Johannesburg with simple upfront pricing. No hidden product, equipment or hourly charges.",
      },
      {
        name: "keywords",
        content:
          "professional cleaning services Johannesburg, home cleaning services Johannesburg, cleaning services Sandton, laundry service Johannesburg, corporate cleaning Johannesburg",
      },
      { property: "og:title", content: "Elite Cleaners | More Than Clean. Peace of Mind." },
      {
        property: "og:description",
        content:
          "Professional home and workplace cleaning with simple upfront pricing and no hidden charges.",
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
    scripts: [{ type: "application/ld+json", children: ldJson }],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    try {
      new Function(pageScript)();
    } catch (err) {
      console.error("Elite Cleaners page script failed", err);
    }
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
