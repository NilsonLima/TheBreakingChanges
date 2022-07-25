import Head from 'next/head';

const aboutBlog = "You probably wondering why the blog is called this way. Before I tell you the real reason behind this, let me introduce you to some context. At the very beginning of my planning to create this project, I decided it should have my signature, visually speaking, something like a craftsman does. However, you also may be questioning why I didn't choose some blogging network such as Medium in the first place. I really like those tools when it comes to sharing knowledge across the community. Maybe 99% of millennial developers have read an article on Medium to solve a bug, or to acquire some knowledge about interesting stuff (including myself). However, I’ve always wanted to create something that someday may become autonomous, with fellows writing about their lessons and stories. It begins as a solo project to boost my communication and writing skills. Later, it may become something greater." +
 "\n\nDon't think of me badly for what I’m about to say, but this blog is about things that you won’t find so easily out there. I don’t plan to post articles like “How to center a div” or “How to install some npm package”. There is a plethora of those contents on the internet, no one needs another guy telling the same things. As a disclaimer, these posts saved (and continues to save) my life. I’m deeply grateful to everyone that wrote detailed explanations about solving that bug that looked unsolvable back then. Despite these things, I really want to write stories that are outliers. Stories that force me to consume documentation, articles, books, conferences, and so on to bring you content that is not mainstream. Also, the soft parts inherent to IT are priceless and worth to be said (things that we live as software engineers and discover alone)." +
"\n\nBack to the naming topic, The Breaking Changes doesn’t mean anything special. It’s just a fancy name that came to my mind that was available as a DNS domain 😁."

export default function About() {
  return (
    <>
      <Head>
        <meta property="og:title" content="About - The Breaking Changes" key="title" />
      </Head>
      <div className="py-10 md:py-14 lg:py-20">
        <h1 className="font-extrabold text-4xl lg:text-5xl">
          About blog
        </h1>
        <div className="prose prose-lg md:prose-xl mt-10">
          <p className="whitespace-pre-wrap">
            {aboutBlog}
          </p>
        </div>
      </div>
    </>
  );
}
