import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

import { formatDateString } from '../src/utils';

import Layout from '../src/components/Layout';

export default function Home({ posts }) {
  return (
    <Layout>
      <div className='px-8 py-4'>
        {
          posts.map(({ slug, frontmatter: { title, description, date, readingTime } }, index) => (
            <div className='md:max-w-full md:px-16 lg:max-w-7xl'>
              {!!index && <div className='bg-zinc-700 w-auto h-px opacity-10' />}
              <div key={slug} className='py-10 md:py-14 lg:py-20'>
                <h1 className='font-extrabold hover:underline text-4xl lg:text-5xl'>
                  <Link href={slug}>{title}</Link>
                </h1>
                <div className='flex items-center space-x-2 text-zinc-500 text-sm font-light mt-2 lg:mt-4'>
                  <span className='hover:underline'><Link href={slug}>{formatDateString(date)}</Link></span>
                  <div className='h-0.5 w-0.5 rounded-full bg-zinc-500' />
                  <span>{`${readingTime} min read`}</span>
                </div>
                <p className='text-left font-extralight mt-8 md:text-md lg:text-lg'>
                  {description}
                  {' '}
                  <span className='underline font-normal hover:text-sky-600'>
                    <Link href={slug}>Read more...</Link>
                  </span>
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </Layout>
  );
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
