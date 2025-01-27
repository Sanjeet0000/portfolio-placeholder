import { Link as ScrollLink } from "react-scroll";
import GithubLogo from "../data/GithubLogo";
const Header = () => {
  return (
    <nav className="select-none">
      <ul className="flex h-20 justify-between border-b-2 border-white border-opacity-5 bg-black p-10 shadow-2xl">
        <li className="flex items-center font-CairoPlay text-2xl font-bold text-red-600">
          Sanjeet.<span className="text-white">io</span>
        </li>
        <li className="flex cursor-pointer items-center gap-4 text-white">
          <ScrollLink
            to="projects-section"
            href="#projects-section"
            className="text-md hover-line pr-6 font-sans"
            smooth={true}
            duration={500}
            aria-label="Project section"
          >
            Projects
          </ScrollLink>

          <a
            href="mailto:sanjeetdeshwal@outlook.com"
            className="text-md hover-line hidden pr-6 font-sans md:inline-block"
            aria-label="contact me"
          >
            Get in touch
          </a>
          <a
            title="Github Profile"
            href="https://github.com/Sanjeet0000"
            aria-label="github profile"
            target="_blank"
            className="cursor-pointer rounded-full bg-white py-[1px] pr-[2px] hover:scale-110 hover:bg-red-600"
          >
            {GithubLogo}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
