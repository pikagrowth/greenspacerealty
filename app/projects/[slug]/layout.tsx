import type { Metadata } from "next";

// We replicate the minimal database here so the server can generate SEO tags
// before sending the page to the client.
const projectDatabase = {
  "shravan-siddhant": {
    title: "Shravan Siddhant",
    category: "Residential & Commercial",
    location: "Old Panvel, Navi Mumbai",
    heroImage: "/images/projects/shravan-siddhant/hero-residential.webp",
    overview: "Shravan Siddhant is a flagship redevelopment project in the heart of Old Panvel offering luxury 1, 2 & 3 BHK residences and high-visibility commercial spaces.",
  }
};

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectDatabase[params.slug as keyof typeof projectDatabase];

  if (!project) {
    return {
      title: "Project Not Found | Greenspace Realty",
    };
  }

  return {
    title: `${project.title} | Premium ${project.category} in ${project.location}`,
    description: project.overview,
    keywords: [
      project.title,
      `${project.title} Panvel`,
      `${project.category} in ${project.location}`,
      "1 BHK Old Panvel",
      "2 BHK Old Panvel",
      "3 BHK Old Panvel",
      "Commercial space Old Panvel",
      "Greenspace Realty"
    ],
    alternates: {
      canonical: `https://greenspacerealty.in/projects/${params.slug}`,
    },
    openGraph: {
      title: `${project.title} in ${project.location} | Greenspace Realty`,
      description: project.overview,
      url: `https://greenspacerealty.in/projects/${params.slug}`,
      siteName: "Greenspace Realty",
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 630,
          alt: `${project.title} by Greenspace Realty`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Greenspace Realty`,
      description: project.overview,
      images: [project.heroImage],
    },
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}