import Head from "next/head";

function SEO({ title, description, author, keywords }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="title" content={title} />
        <meta name="keywords" content={keywords}/>
        <meta name="author" content={author} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    </div>
  );
}

export default SEO;