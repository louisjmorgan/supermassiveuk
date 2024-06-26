import { z, defineCollection, reference } from "astro:content";

const data = defineCollection({
  type: "data",
  schema: z.any(),
});

const pages = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        bentos: z.array(
          z.object({
            src: image(),
            alt: z.string(),
            class: z.string(),
          })
        ),
        what_we_dos: z.array(
          z.object({
            title: z.string(),
            text: z.string(),
            image: z.object({
              src: image(),
              alt: z.string(),
              class: z.string(),
            }),
          })
        ),
        furries: z.record(
          z.object({
            src: image(),
            class: z.string(),
            scroll_speed: z.number(),
          })
        ),
        blobs: z.array(
          z.object({
            src: image(),
            class: z.string(),
            scroll_speed: z.number(),
          })
        ),
      })
      .catchall(z.any())
      .or(
        z.object({
          meta_title: z.string(),
          meta_description: z.string(),
          sections: z.record(
            z.object({
              gradient: z.string(),
              scroll_speed: z.number(),
              text: z.string(),
              bentos: z.array(
                z.object({
                  src: image().optional(),
                  alt: z.string(),
                  class: z.string(),
                })
              ),
            })
          ),
          furries: z.record(
            z.object({
              src: image(),
              class: z.string(),
              scroll_speed: z.number(),
            })
          ),
        })
      )
      .or(
        z.object({
          meta_title: z.string(),
          meta_description: z.string(),
          bentos: z.array(
            z.object({
              src: image(),
              alt: z.string(),
              class: z.string(),
            })
          ),
          furries: z.record(
            z.object({
              src: image(),
              class: z.string(),
              scroll_speed: z.number(),
            })
          ),
        })
      )
      .or(
        z.object({
          meta_title: z.string(),
          meta_description: z.string(),
          furries: z.array(
            z.object({
              src: image(),
              class: z.string(),
            })
          ),
        })
      )
      .or(z.any()),
});

const creatives = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string().optional(),
      website: z.string().optional(),
      cover_image: z.object({
        src: image(),
        alt: z.string(),
      }),
      bentos: z.array(
        z.object({
          src: image(),
          alt: z.string(),
          class: z.string(),
        })
      ),
    }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = {
  data,
  pages,
  creatives,
};
