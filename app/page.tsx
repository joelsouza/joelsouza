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
          <p className="subtitle">a software engineer from Brazil.</p>
        </header>
      </section>
      <section className='intro'>
        <p>
          I have been a passionate developer since 2007, working with various technologies and programming languages in diverse fields such as media, education, and drone racing.
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
