export default function Template(props) {
  return (
    <div className="flex flex-col my-3">
      <p className="uppercase font-bold text-xl my-3">{props.heading}</p>
      <ul className="list-disc pl-8">
        {props.list.map((item, index) => {
          return <li>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
