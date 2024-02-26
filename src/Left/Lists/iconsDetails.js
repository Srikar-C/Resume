import { BiLogoGmail } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
const icons = [
  {
    id: 1,
    icon: (
      <BiLogoGmail className="border-2 border-white rounded-[50%] p-[4px] text-4xl" />
    ),
    text: "csrikar2003@gmail.com",
    link: false,
  },
  {
    id: 2,
    icon: (
      <ImLocation2 className="border-2 border-white rounded-[50%] p-[4px] text-4xl" />
    ),
    text: "Kurnool, Andhra Pradesh",
    link: false,
  },
  {
    id: 3,
    icon: (
      <BsFillCalendarDateFill className="border-2 border-white rounded-[50%] p-[4px] text-4xl" />
    ),
    text: (
      <span
        dangerouslySetInnerHTML={{ __html: `20<sup>th</sup> April, 2003` }}
      />
    ),
    link: false,
  },
  {
    id: 4,
    icon: (
      <MdOutlinePermPhoneMsg className="border-2 border-white rounded-[50%] p-[4px] text-4xl" />
    ),
    text: "+91 9030585689",
    link: false,
  },
  {
    id: 5,
    icon: (
      <FaLinkedinIn className="border-2 border-white rounded-[50%] p-[4px] text-4xl" />
    ),
    text: "srikar-challa",
    link: true,
    url: "https://www.linkedin.com/in/srikar-challa-5a22b9250/",
  },
  {
    id: 6,
    icon: (
      <PiGithubLogoFill className="border-2 border-white rounded-[50%] p-[4px] text-4xl" />
    ),
    text: "Srikar-C",
    link: true,
    url: "https://github.com/Srikar-C",
  },
];

export default icons;
