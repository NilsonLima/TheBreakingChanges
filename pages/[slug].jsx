import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

export default function Post({ content, frontmatter }) {
  return (
    <article className="prose mx-auto">
      <h1 className="text-5xl font-bold">
        {frontmatter.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </article>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const file = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(file);
  return {
    props: { frontmatter, content },
  };
}

export async function getStaticPaths() {
  const paths = fs.readdirSync('posts').map(filename => ({ params: { slug: filename.replace('.md', '') } }));
  return { paths, fallback: false };
}
