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
    <div className="flex flex-col justify-start flex-grow lg:flex-row lg:flex-grow lg:items-stretch">
      <div className="flex flex-col m-1 lg:w-1/2 lg:justify-center lg:flex-1 lg:ml-3">
        <h1 className="p-3 mt-8 text-5xl text-center text-white">
          Will Corrigan
        </h1>
        <h2 className="mt-1 mb-10 text-2xl text-center text-white">
          Software Engineer
        </h2>
      </div>
      <h3 className="mt-5 mb-3 text-center text-white underline text-1xl decoration-solid">
        Recent Posts
      </h3>
      <ul className="flex flex-col pt-5">
        {data.postList.map((post) => (
          <li
            className="flex justify-center lg:justify-end lg:mr-5"
            key={post.id}
          >
            <Card postId={post.id} postTitle={post.title}></Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
