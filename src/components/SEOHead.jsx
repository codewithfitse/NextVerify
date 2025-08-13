import React from "react";
import { Helmet } from "react-helmet-async";

const SEOHead = ({
  title = "Fitsum Zerihun - Elite Full Stack Developer & AI Enthusiast",
  description = "Professional Full Stack Developer specializing in React, Node.js, and AI integration. Creating exceptional digital experiences with modern technologies and proven results.",
  keywords = "Full Stack Developer, React Developer, Node.js Developer, AI Developer, Web Development, Frontend Developer, Backend Developer, JavaScript, TypeScript, Portfolio",
  image = "/portfolioHeroBg.png",
  url = "https://fitsum.dev",
  type = "website",
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fitsum Zerihun",
    jobTitle: "Full Stack Developer",
    description:
      "Elite Full Stack Developer specializing in React, Node.js, and AI integration with 3+ years of experience delivering exceptional digital solutions.",
    url: url,
    image: `${url}${image}`,
    sameAs: [
      "https://github.com/codewithfitse",
      "https://www.linkedin.com/in/fitsum-zerihun-89aab02a9",
      "https://x.com/lil_fitse",
      "https://www.instagram.com/codewithfitse",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    knowsAbout: [
      "React",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "AI/ML",
      "Web Development",
      "Mobile Development",
      "Database Design",
      "API Development",
      "DevOps",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Addis Ababa",
      addressCountry: "Ethiopia",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Computer Science Graduate",
    },
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Fitsum Zerihun" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Fitsum Zerihun Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />
      <meta name="twitter:creator" content="@lil_fitse" />
      <meta name="twitter:site" content="@lil_fitse" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ffd700" />
      <meta name="msapplication-TileColor" content="#ffd700" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Fitsum Zerihun" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://github.com" />
      <link rel="preconnect" href="https://www.linkedin.com" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//github.com" />
      <link rel="dns-prefetch" href="//www.linkedin.com" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Additional SEO Scripts */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Fitsum Zerihun Portfolio",
          url: url,
          description: description,
          author: {
            "@type": "Person",
            name: "Fitsum Zerihun",
          },
          potentialAction: {
            "@type": "SearchAction",
            target: `${url}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        })}
      </script>

      {/* Performance Hints */}
      <link rel="preload" href="/portfolioHeroBg.png" as="image" />
      <link rel="preload" href="/portfolioLogo.png" as="image" />

      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta
        httpEquiv="Referrer-Policy"
        content="strict-origin-when-cross-origin"
      />

      {/* PWA Meta Tags */}
      <meta name="application-name" content="Fitsum Zerihun Portfolio" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Social Media Verification */}
      <meta
        name="google-site-verification"
        content="your-google-verification-code"
      />
      <meta name="msvalidate.01" content="your-bing-verification-code" />

      {/* Analytics Placeholder */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
      ></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </script>
    </Helmet>
  );
};

export default SEOHead;
