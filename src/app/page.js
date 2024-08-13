import Image from "next/image";
import demo from "../assets/coffee.jpg";

export default function Home() {
  const volunteers = [
    {
      img: demo,
      title: "child protection",
    },
    {
      img: demo,
      title: "child protection",
    },
    {
      img: demo,
      title: "child protection",
    },
    {
      img: demo,
      title: "child protection",
    },
    {
      img: demo,
      title: "child protection",
    },
    {
      img: demo,
      title: "child protection",
    },
    {
      img: demo,
      title: "child protection",
    },
    {
      img: demo,
      title: "child protection",
    },
    {
      img: demo,
      title: "child protection",
    },
    {
      img: demo,
      title: "child protection",
    },
  ];
  return (
    <main className="md:mx-[100px]">
      <div>
        <h1 className="uppercase text-2xl font-bolde text-center my-10">
          A grow by helping people in need.
        </h1>

        <div className="flex justify-center items-center space-x-2">
          <input
            className="border border-slate-900 rounded py-2 px-2"
            type="text"
            placeholder="search"
          />

          <button className="py-2 px-4 text-white border rounded bg-blue-500">
            Search
          </button>
        </div>

        <div className="grid-cols-1 grid sm:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
          {volunteers.map((volunteer, index) => (
            <div key={index} className="bg-gray-100 p-1 rounded ">
              <Image
                src={volunteer.img}
                width={1000}
                height={1000}
                alt="pic"
                className="rounded-md w-full h-56 hover:scale-105 duration-500"
              />
              <h3 className="text-xl font-bold py-2 px-2">{volunteer.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
