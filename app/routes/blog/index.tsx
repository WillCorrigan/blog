import { useLoaderData, Outlet, Link } from "@remix-run/react";
import { json } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { Card } from "~/components/card/card";

export const loader = async () => {
  return json({
    postList: await db.post.findMany(),
  });
};

export default function Blog() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="max-w-md">
      This is the blog.
      <div className="flex flex-row">
        <ul className="flex">
          {data.postList.map((post) => (
            <li key={post.id}>
              <Card postId={post.id} postTitle={post.title}></Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
