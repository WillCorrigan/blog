import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import invariant from "tiny-invariant";

export async function getPost(id: string) {
  return db.post.findUnique({ where: { id } });
}

export const loader = async ({ params }: LoaderArgs) => {
  console.log(params);
  invariant(params.postId, `params.id is required`);

  const post = await getPost(params.postId);

  invariant(post, `Post not found: ${params.postId}`);

  return json({ post });
};

export default function PostId() {
  const { post } = useLoaderData<typeof loader>();
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        Some Post: {post.title}
      </h1>
      <p>Content: {post.content}</p>
    </main>
  );
}
