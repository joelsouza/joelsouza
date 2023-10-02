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
          I&apos;ve become the person I once dreamed of being as a teenager.
        </p>
        <p>
          While I don&apos;t hold a CS degree, I&apos;ve been a passionate developer since 2007. <a href="https://www.linkedin.com/in/joel-ssouza/" target='_blank'>I know Ruby</a> and I can play a guitar.
          I can write apps in <a href="https://www.linkedin.com/in/joel-ssouza/" target='_blank'>NodeJS and React</a>. However, I&apos;m obsessed with following the rapid evolution of web platforms, especially those built with the foundational HTML, CSS, and JavaScript that drive Web APIs
        </p>
        <p>
          I run half marathons from time to time, <a href="https://www.strava.com/athletes/56494818" target='_blank'>train weekly</a>, and aspire to someday complete a full marathon.
        </p>
        <p>
          I am currently learning Elixir while mastering the art of balancing family, work, and focus in the midst of the daily hustle.
        </p>
        <nav>
          <a href="mailto:hire@joelsouza.com">Hire me</a>
        </nav>
      </section>
    </article>
  )
}
