import { defineCollection } from 'astro:content';
import { z } from 'astro/zod'
import { glob } from 'astro/loaders';
import { allowedTechsEnum } from '@/types/collections.ts';

type Achievement = string | Achievement[];
const AchievementSchema: z.ZodType<Achievement> = z.lazy(() => z.union([z.string(), z.array(AchievementSchema)]));

// eslint-disable-next-line import/prefer-default-export
export const collections = {
  project: defineCollection({
    loader: glob({ pattern: '**/[^_]*.mdx', base: './src/content/project' }),
    schema: z.object({
      draft: z.boolean(),
      hasContainerized: z.boolean().optional(),
      title: z.string(),
      description: z.string(),
      link: z
        .object({
          url: z.string().optional(),
          sourceCodeUrl: z.string().optional(),
        })
        .optional(),
      thumbnail: z
        .object({
          src: z.string(),
          alt: z.string(),
        })
        .optional(),
      video: z.array(z.object({ src: z.string(), type: z.string() })).optional(),
      tech: z.array(allowedTechsEnum),
      themeColor: z.string().min(4).max(9).regex(/^#/).default('#fff'),
      publishDate: z.date(),
    }),
  }),
  faq: defineCollection({
    loader: glob({ pattern: '**/[^_]*.mdx', base: './src/content/faq' }),
    schema: z.object({
      title: z.string(),
    }),
  }),
  resume: defineCollection({
    loader: glob({ pattern: '**/[^_]*.json', base: './src/content/resume' }),
    schema: z.object({
      personalInfo: z.object({
        name: z.string(),
        role: z.string(),
        description: z.string(),
        socialLinks: z.array(
          z.object({
            name: z.string(),
            icon: z.string(),
            url: z.string(),
          }),
        ),
      }),
      workExperience: z.array(
        z.object({
          title: z.string(),
          company: z.object({
            name: z.string(),
            link: z.string(),
          }),
          time: z.string(),
          achievements: z.array(AchievementSchema),
          techs: z.array(z.string()),
        }),
      ),
      achievements: z.array(
        z.object({
          title: z.string(),
          subtitle: z.string(),
          url: z.string(),
        }),
      ),
      education: z.array(
        z.object({
          title: z.string(),
          time: z.string(),
          description: z.string(),
        }),
      ),
      skills: z.array(
        z.object({
          developments: z.array(z.string()),
        }),
      ),
      links: z.array(
        z.object({
          mySite: z.array(
            z.object({
              title: z.string(),
              link: z.string(),
            }),
          ),
        }),
      ),
    }),
  }),
  config: defineCollection({
    loader: glob({ pattern: '**/[^_]*.{yaml,yml}', base: './src/content/config' }),
    schema: z
      .object({
        favicons: z.record(z.string(), z.string()),
        globalOgImage: z.object({
          url: z.string(),
          height: z.number(),
          width: z.number(),
          type: z.string(),
        }),
        heroVideo: z.object({
          poster: z.string(),
          sources: z.array(z.object({ src: z.string(), type: z.string() })),
        }),
        website: z.object({
          name: z.string(),
          username: z.string(),
          email: z.string(),
          emojiStatus: z.string(),
          globalBackgroundTextureImage: z.string(),
          globalHighlightTextureImage: z.string(),
          socials: z.array(
            z.object({
              name: z.string(),
              url: z.string(),
            }),
          ),
        }),
      })
      .transform((data) => ({
        ...data,
        website: {
          ...data.website,
          get copyright() {
            return `© ${new Date().getFullYear()} ${
              data.website.name
            } All rights reserved. Theme <a class="underline" href='https://github.com/riceball-tw/letter'>Letter</a> licensed under MIT.`;
          },
        },
      })),
  }),
};
