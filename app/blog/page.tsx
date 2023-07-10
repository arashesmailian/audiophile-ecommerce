import {getAllPosts} from '@/lib/cms'
import Link from 'next/link'

type Props = {}

const Blog = async (props: Props) => {
  const posts = await getAllPosts()

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
