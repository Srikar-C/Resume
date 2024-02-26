import exp from "../Lists/exp";

export default function Experience() {
  return (
    <div className="experience">
      <p className="border-none bg-blue-300 shadow-md shadow-sky-950 px-4 uppercase tracking-[1px] font-bold text-black my-2 rounded-[10px] p-1">
        Work Experience
      </p>
      {exp.map((item, index) => {
        return (
          <div className="flex flex-col w-[95%] mx-auto">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <p className="font-semibold">{item.role}</p>
                <p className="text-[13px] text-[#283f70] font-medium">
                  {item.company}
                </p>
              </div>
              <p className="font-medium">{item.date}</p>
            </div>
            <ul className="list-disc pl-8">
              {item.desc.map((subitem, index) => {
                return <li>{subitem.text}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
