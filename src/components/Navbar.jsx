import logo from "../assets/JoshuaNkamigboLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/"><FaLinkedin /></a>
        <a href="https://github.com/Joshnkams/Joshnkams.git"><FaGithub /></a>
        <a href="https://x.com/Joshua80052387?t=POnuK64ixno2bOiHh4qSSw&s=09"><FaSquareXTwitter /></a>
        <a href="https://www.instagram.com/joshua__nkamigbo?igsh=cjlwdjg5Mm1tdG04"><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;
