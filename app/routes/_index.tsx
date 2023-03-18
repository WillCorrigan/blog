import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Card } from "~/components/card/card";
import { db } from "~/utils/db.server";

export const loader = async () => {
  return json({
    postList: await db.post.findMany({ take: 2 }),
  });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col lg:flex-row lg:flex-grow lg:items-stretch">
      <div className="flex flex-col justify-center flex-1 w-1/2 ml-3">
        <h1 className="mt-8 text-6xl text-center text-white">Will Corrigan</h1>
        <h2 className="items-center mt-8 text-3xl text-center text-white">
          Software Engineer
        </h2>
      </div>
      <div className="w-1/2">
        <ul className="flex flex-col pt-20">
          {data.postList.map((post) => (
            <li className="flex justify-end mr-5" key={post.id}>
              <Card postId={post.id} postTitle={post.title}></Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
