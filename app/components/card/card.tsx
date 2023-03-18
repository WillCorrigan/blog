import { Link } from "@remix-run/react";

interface Props {
  postTitle: string;
  postId: string;
}

export const Card = ({ postTitle, postId }: Props) => {
  return (
    <Link
      to={`/blog/view/${postId}`}
      className="w-3/4 max-w-xs mb-4 text-center bg-gray-300 shadow shadow-black lg:h-52 lg:w-80"
    >
      <img src="../images/blogPost.jpg" className="scale-95" alt="hello"></img>
      <h3 className="pb-3 text-1xl">{postTitle}</h3>
    </Link>
  );
};
