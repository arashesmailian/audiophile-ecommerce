import { getAllPosts } from '@/lib/cms';
import styles from './index.module.scss';
import Link from 'next/link';

type blog = {
  title: string;
  slug: string;
  body: string;
};
async function Blog() {
  const blogs = await getAllPosts();

  return (
    <div>
      {blogs.map((blog: blog) => (
        <div className={styles.container} key={blog.title}>
          <Link href={`/blog/${blog.slug}`}>{blog.slug}</Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;
