import {getAllPosts} from '@/lib/cms'
import Link from 'next/link'

type Props = {
  posts: {title: string; slug: string}[]
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {props: {posts}}
}

const Blog = async (props: Props) => {
  console.log(props)
  const posts = props.posts

  return (
    <div>
      {posts.map((post, index) => (
        <Link key={index} href={`/blog/${post.slug}`}>
          <div>
            <h1>{post.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog
