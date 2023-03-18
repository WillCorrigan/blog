import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import invariant from "tiny-invariant";

export async function getPost(id: string) {
  return db.post.findUnique({ where: { id } });
}

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.postId, `params.id is required`);

  const post = await getPost(params.postId);

  invariant(post, `Post not found: ${params.postId}`);

  return json({ post });
};

export default function PostId() {
  const { post } = useLoaderData<typeof loader>();
  return (
    <article className="flex-grow max-w-4xl min-h-full p-5 mx-auto mb-4 prose shadow-2xl bg-slate-200">
      <h1 className="my-6 text-3xl text-center border-b-2">
        Some Post: {post.title}
      </h1>
      <p>Content: {post.content}</p>
      <ul>
        <li>testr 1</li>
        <li>testr 12</li>
      </ul>
      <pre>
        <code className="language-js">
          module.exports = {"{"}
          test: [],
          {"}"}
        </code>
      </pre>
    </article>
  );
}
