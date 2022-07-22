import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

export default function Post({ content, frontmatter }) {
  return (
    <div className="py-10 md:py-14 lg:py-20">
      <article>
        <h1 className="font-extrabold text-4xl lg:text-5xl mb-10">
          {frontmatter.title}
        </h1>
        <div className="prose prose-lg md:prose-xl overflow-x-auto" dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </article>
    </div>
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
