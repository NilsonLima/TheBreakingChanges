import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

import { formatDateString } from '../src/utils';

export default function Home({ posts }) {
  return posts.map(({ slug, frontmatter: { title, description, date, readingTime } }, index) => (
    <div key={slug}>
      {!!index && <div className='bg-zinc-700 w-auto h-px opacity-10' />}
      <div className='py-10 md:py-14 lg:py-20'>
        <h1 className='font-extrabold hover:underline text-4xl lg:text-5xl'>
          <Link href={slug}>{title}</Link>
        </h1>
        <div className='flex items-center space-x-2 text-zinc-500 text-sm font-light mt-2 lg:mt-4'>
          <span className='hover:underline'><Link href={slug}>{formatDateString(date)}</Link></span>
          <div className='h-0.5 w-0.5 rounded-full bg-zinc-500' />
          <span>{`${readingTime} min read`}</span>
        </div>
        <div className='prose prose-lg md:prose-xl mt-8'>
          <p>
            {description}
            {' '}
            <a className='underline font-normal hover:text-sky-600' href={slug}>Read more...</a>
          </p>
        </div>
      </div>
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
