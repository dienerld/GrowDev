export type TPropsCard = {
  image: string
  title: string
}
export function Card({ image, title }:TPropsCard) {
  return (
    <div
      className="flex flex-col justify-center items-center"
    >
      <img
        src={image}
        alt={title}
        className="w-24"
      />
      <h1 className="text-xl">{title}</h1>
    </div>
  );
}
