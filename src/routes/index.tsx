import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import "../styles/elite.css";
import bodyHtml from "../content/elite-body.html?raw";
import pageScript from "../content/elite-script.js?raw";
import ldJson from "../content/elite-ld.json?raw";
import favicon from "../assets/img_fda68366.png.asset.json";

export const Route = createFileRoute("/")({
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
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,340;9..144,440;9..144,560&family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: favicon.url },
      { rel: "apple-touch-icon", href: favicon.url },
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
