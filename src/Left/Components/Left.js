import Template from "./Template";
import techItems from "../Lists/techs";
import per from "../Lists/personl";
import Icons from "./Icons";
import icons from "../Lists/iconsDetails";
import lang from "../Lists/langs";
import hobby from "../Lists/hobby";
export default function Left() {
  return (
    <div className="flex flex-col w-[37%] bg-blue-800 text-white pl-5">
      <div className="name">
        <p className="text-4xl font-semibold my-5">Challa Srikar</p>
      </div>
      <Icons list={icons} />
      <div className="port flex flex-col my-3">
        <p className="uppercase font-bold text-xl">Portfolio:</p>
        <a
          href="https://srikarchalla.netlify.app/"
          target="_blank"
          className="mx-3"
        >
          <u className="italic">https://srikarchalla.netlify.app/</u>
        </a>
      </div>
      <Template heading="Technical Skills" list={techItems} />
      <Template heading="Personal Skills" list={per} />
      <Template heading="Languages Knows" list={lang} />
      <Template heading="Hobbies" list={hobby} />
    </div>
  );
}
