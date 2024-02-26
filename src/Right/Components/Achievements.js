import achieve from "../Lists/achieve";

export default function Achievements(props) {
  return (
    <div className="achieve">
      <p className="border-none bg-blue-300 shadow-md shadow-sky-950 px-4 uppercase tracking-[1px] font-bold text-black my-2 rounded-[10px] p-1">
        {props.heading}
      </p>
      <div className="flex flex-col w-[95%] mx-auto">
        <ul className="list-disc pl-8">
          {achieve.map((item, index) => {
            return <li>{item.list}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
