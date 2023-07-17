import Head from 'next/head'
import Link from 'next/link'

import styles from '../style/not-found-page/index.module.scss'

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>404 | page not found</title>
        <meta name='description' content='Page Not Found!' />
      </Head>
      <main>
        <section className={styles.container}>
          <div className={styles.wrap}>
            <h1 className={styles.header}>404</h1>
            <h2 className={styles.sub_header}>page not found!</h2>
            <p className={styles.text}>
              Go back to the
              <Link href='/'>Home page</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default NotFoundPage
