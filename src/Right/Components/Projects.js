import proj from "../Lists/proj";

export default function Projects(props) {
  return (
    <div className="projects">
      <p className="border-none bg-blue-300 shadow-md shadow-sky-950 px-4 uppercase tracking-[1px] font-bold text-black my-2 rounded-[10px] p-1">
        {props.heading}
      </p>
      {proj.map((item, index) => {
        return (
          <div className="flex flex-col w-[95%] mx-auto">
            <div className="flex flex-row justify-between">
              <p className="font-semibold border-b-2 border-black w-fit ">
                {item.name}
              </p>
              <a
                href={item.source}
                target="_blank"
                className="italic font-medium"
              >
                Source Code
              </a>
            </div>
            <ul className="list-disc pl-8">
              <li>{item.desc}</li>
              <li>{item.tech}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
