import { delay } from "@/lib/delay"

type Props = {params:{slug:[string]},searchParams:{}}


const getData = async (slug:Props['params']['slug']) => {
  const post  = await delay(5000)
  return {slug}
}

export default async function BlogPost(props:Props){
  const {slug} = props.params
  const post = await getData(slug)
  console.log(slug)
  console.log(post)
  return (
    <div>{post.slug}</div>
  )
}