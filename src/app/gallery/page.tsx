import { Flex } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { gallery, person } from "@/app/resources/content";

export async function generateMetadata() {
  const title = gallery.title;
  const description = gallery.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function Gallery() {
  return (
    <Flex fillWidth>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: gallery.title,
            description: gallery.description,

            image: gallery.images.map((image) => ({
              "@type": "ImageObject",

              description: image.alt,
            })),
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
              },
            },
          }),
        }}
      />
      <MasonryGrid />
    </Flex>
  );
}
