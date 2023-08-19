type Props = {
  params: { slug: string };
};

const BlogPost = ({ params }: Props) => {
  return (
    <div>
      BlogPost <p>{params.slug}</p>
    </div>
  );
};

export default BlogPost;
