import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Card } from "~/components/card/card";
import { db } from "~/utils/db.server";

export const loader = async () => {
  return json({
    postList: await db.post.findMany(),
  });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-row flex-shrink-0 items-stretch">
      <div className="flex flex-col ml-3 justify-center w-1/2 flex-1">
        <h1 className="text-6xl text-center mt-8 text-white">Will Corrigan</h1>
        <h2 className="text-3xl text-center mt-8 text-white items-center">
          Software Engineer
        </h2>
      </div>
      <div className="flex flex-col justify-center w-1/2">
        <ul className="text-center mt-5 ml-25">
          {data.postList.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
