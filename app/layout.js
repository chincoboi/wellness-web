import NavBar from "./components/header/NavBar";
import "./globals.css";
import "./App.css";
import Footer from "./components/footer/Footer";

export const metadata = {
  title: {
    template: "%s | Wellness Service",
    default: "Wellness Service",
  },
  description: "Wellness Service",
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "http://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Wellness Service",
        // url: "https://wellness.net",
        logo: "/favicon.ico",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+1 999-536-000",
            contactType: "customer service",
          },
        ],
        sameAs: [
          // "https://web.facebook.com/",
          // "https://twitter.com/",
          // "https://www.linkedin.com/company",
          // "https://www.instagram.com/"
        ],
      },
      {
        "@type": "WebSite",
        name: "Wellness Service",
        url: "https://wellness.net",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://wellness.net/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": "https://wellness.net",
              name: "Home",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": "https://wellness.net/services",
              name: "Services",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id": "https://wellness.net/our-team",
              name: "Our Team",
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@id": "https://wellness.net/telehealth",
              name: "Telehealth",
            },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@id": "https://wellness.net/blog",
              name: "Blog",
            },
          },
          {
            "@type": "ListItem",
            position: 6,
            item: {
              "@id": "https://wellness.net/contact-us",
              name: "Contact Us",
            },
          },
          {
            "@type": "ListItem",
            position: 7,
            item: {
              "@id": "https://wellness.net/privacy-policy",
              name: "Privacy Policy",
            },
          },
          {
            "@type": "ListItem",
            position: 8,
            item: {
              "@id": "https://wellness.net/terms-of-service",
              name: "Terms of Service",
            },
          },
          {
            "@type": "ListItem",
            position: 9,
            item: {
              "@id": "https://wellness.net/faq",
              name: "FAQ",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        ></script>
        <meta name="description" content="Wellness Services" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
