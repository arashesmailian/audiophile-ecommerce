import Image from 'next/image'
import test from 'assets/favicon-32x32.png'

type Props = {}

const BlogLoader = (props: Props) => {
  return (
    <div>
      <span>i want to use this keyboard</span>
      <Image src={test} alt='test image' />
      <section>
        <p>
          this <span>{`<div>sdfsfdsa</div>`}</span>
        </p>
      </section>
    </div>
  )
}

export default BlogLoader
