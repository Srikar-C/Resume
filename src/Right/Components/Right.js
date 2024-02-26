import Achievements from "./Achievements";
import Career from "./Career";
import Certifications from "./Certifications";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Right() {
  return (
    <div className="flex flex-col px-[3vw] my-[2vh] w-[75%]">
      <Career heading="Career Objective" />
      <Education heading="Educational Qualification" />
      <Experience heading="Work Experience" />
      <Projects heading="Projects" />
      <Achievements heading="Achievements/ Participations" />
      <Certifications heading="Certifications" />
    </div>
  );
}
