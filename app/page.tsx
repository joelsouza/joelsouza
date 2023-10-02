import Head from 'next/head'
export default function Home() {
  return (
    <article className="main">
      <Head>
        <meta name="theme-color" content="#1c2321ff" />
      </Head>
      <section className="hero">
        <header>
          <h1>Hi, I&apos;m Joel</h1>
          <p className="subtitle">a passionate software engineer from Brazil.</p>
        </header>
      </section>
      <section className='intro'>
        <p>
          I had basically become the person whose life I had dreamed of living as a teenager.
        </p>
        <p>
          While I don&apos;t hold a CS degree, I&apos;ve been a passionate developer since 2007. I know Ruby and how to play guitar.
          I can write NodeJS and React but I&apos;m obsessed following the fast evolution of web platform made with the good old HTML, CSS and JavaScript to drive Web APIs. <br />
        </p>
        <p>
          I&apos;m running half marathons from time to time and weekly training and aspiring to someday run a marathon.
        </p>
        <p>
          I am currently learning Elixir and mastering the art of balancing family, work, and focus amidst the daily hustle.
        </p>
        <nav>
          <a href="mailto:hire@joelsouza.com">Hire me</a>
        </nav>
      </section>
    </article>
  )
}
