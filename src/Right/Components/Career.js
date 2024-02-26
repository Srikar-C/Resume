export default function Career(props) {
  return (
    <div className="career flex flex-col">
      <p className=" border-none bg-blue-300 shadow-md shadow-sky-950 px-4 uppercase tracking-[1px] font-bold text-black my-2 rounded-[10px] p-1">
        {props.heading}
      </p>
      <p className="w-[95%] mx-auto text-justify">
        I am looking for a challenging role in a reputed and progressive
        organization where I can expose my technical and interpersonal skills
        and grow as successful competent.
      </p>
    </div>
  );
}
