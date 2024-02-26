import edu from "../Lists/educ";

export default function Education(props) {
  return (
    <div className="education flex flex-col">
      <p className="border-none bg-blue-300 shadow-md shadow-sky-950 px-4 uppercase tracking-[1px] font-bold text-black my-2 rounded-[10px] p-1">
        {props.heading}
      </p>
      {edu.map((item, index) => {
        return (
          <div className="flex flex-row justify-between w-[95%] mx-auto my-1">
            <p className="w-[150px]">{item.year}</p>
            <p className="w-[30px]">{item.colon}</p>
            <div className="details flex flex-col w-[500px] gap-[2px]">
              {item.desc.map((subitem, index) => {
                return <p>{subitem.text}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
