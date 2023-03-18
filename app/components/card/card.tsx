interface Props {
  postTitle: string;
  postId: string;
}

export const Card = (props: Props) => {
  return <div className="m-5 bg-slate-400 h-52 w-80">{props.postTitle}</div>;
};
