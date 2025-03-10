import {
  CodeXmlIcon,
  FolderGit2Icon,
  HomeIcon,
  MapPinIcon,
  UserIcon,
} from "lucide-react";

export default function NavBar() {
  return (
    <>
      <nav>
        <div>
          <p>Oluwasegun Soji-John</p>
          <p>Software Engineer/Data Scientist</p>
        </div>
        <div>
          <ul>
            <li>
              <a href="/">
                <HomeIcon size={15} />
                Home
              </a>
            </li>
            <li>
              <a href="/about">
                <UserIcon size={15} />
                About
              </a>
            </li>
            <li>
              <a href="/">
                <CodeXmlIcon size={15} />
                Skills
              </a>
            </li>
            <li>
              <a href="/">
                <FolderGit2Icon size={15} />
                Projects
              </a>
            </li>
          </ul>
        </div>
        <div>
          <MapPinIcon size={17} />
          Maryland, USA
        </div>
      </nav>
    </>
  );
}
