'use client'
import {useEffect} from 'react'
import {useRouter} from 'next/navigation'
import {styled} from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'
import {QUERIES} from '@/lib/mediaQueries'

const Container = styled.section`
  max-width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`
const Wrap = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const Header = styled.h1`
  color: var(--color-pry-100);
  font-size: 5rem;
  line-height: 5rem;

  @media ${QUERIES.mobileMini} {
    font-size: 9rem;
    line-height: 9rem;
  }

  @media ${QUERIES.tablet} {
    font-size: 15rem;
    line-height: 15rem;
  }
`
const SubHeader = styled.h2`
  text-transform: uppercase;
  font-size: 1.5rem;
  margin: 1rem 0rem;
`
const Text = styled.p`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 0.9rem;
  a {
    color: var(--color-pry-100);
    font-weight: var(--font-weight-200);
    margin-left: 0.3rem;
    font-size: 0.9rem;

    &:hover {
      transition: var(--transition);
      color: var(--color-sec-100);
      text-decoration: underline;
    }
  }
`

const NotFoundPage = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 2999)
  }, [router])
  return (
    <>
      <Head>
        <title>404 | page not found</title>
        <meta name='description' content='Page Not Found!' />
      </Head>
      <main>
        <Container>
          <Wrap>
            <Header>404</Header>
            <SubHeader>page not found!</SubHeader>
            <Text>
              Go back to the
              <Link href='/'>Home page</Link>
            </Text>
          </Wrap>
        </Container>
      </main>
    </>
  )
}

export default NotFoundPage
