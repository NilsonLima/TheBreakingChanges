import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import markdownItHightlight from 'markdown-it-highlightjs';

import { formatDateString } from '../src/utils';

export default function Post({ content, frontmatter: { title, date, readingTime } }) {
  return (
    <div className="py-10 md:py-14 lg:py-20">
      <article>
        <h1 className="font-extrabold text-4xl lg:text-5xl">
          {title}
        </h1>
        <div className="flex items-center space-x-2 text-zinc-500 text-sm font-light mt-2 lg:mt-4 mb-10">
          <span>{formatDateString(date)}</span>
          <div className="h-0.5 w-0.5 rounded-full bg-zinc-500" />
          <span>{`${readingTime} min read`}</span>
        </div>
        <div
          className="prose prose-lg md:prose-xl prose-pre:w-full lg:prose-pre:max-w-4xl prose-headings:text-black prose-pre:px-4 overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const file = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(file);

  const html = md().use(markdownItHightlight).render(content);

  return {
    props: { frontmatter, content: html },
  };
}

export async function getStaticPaths() {
  const paths = fs.readdirSync('posts').map(filename => ({ params: { slug: filename.replace('.md', '') } }));
  return { paths, fallback: false };
}
