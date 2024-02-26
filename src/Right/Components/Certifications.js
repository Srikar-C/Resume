import certi from "../Lists/certi";

export default function Certifications(props) {
  return (
    <div className="projects">
      <p className="border-none bg-blue-300 shadow-md shadow-sky-950 px-4 uppercase tracking-[1px] font-bold text-black my-2 rounded-[10px] p-1">
        {props.heading}
      </p>
      <div className="flex flex-col w-[95%] mx-auto">
        <ul className="list-disc pl-8">
          {certi.map((item, index) => {
            return <li>{item.list}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
