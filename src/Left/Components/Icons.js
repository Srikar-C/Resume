export default function Icons(props) {
  return (
    <div className="flex flex-col">
      {props.list.map((item, index) => {
        return (
          <div className="flex flex-row items-center gap-[10px] my-2">
            {item.icon}
            {item.link ? (
              <a href={item.url} target="_blank">
                <u className="italic">{item.text}</u>
              </a>
            ) : (
              <p>{item.text}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
