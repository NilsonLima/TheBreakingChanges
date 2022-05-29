import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';


export default function Home({ posts }) {
  return posts.map(({ slug, frontmatter: { title, description } }) => (
    <div key={slug} className="container">
      <h1 className="text-5xl font-bold hover:underline">
        <Link href={slug}>{title}</Link>
      </h1>
      <p>{description}</p>
    </div>
  ));
}

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map(filename => {
    const slug = filename.replace('.md', '');
    const fileContent = fs.readFileSync(`posts/${filename}`, 'utf-8');
    const { data: frontmatter } = matter(fileContent);
    return {
      slug,
      frontmatter
    };
  });

  return { props: { posts } };
}
