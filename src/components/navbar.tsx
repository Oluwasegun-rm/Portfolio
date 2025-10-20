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
        <div className="navbar-name">
          <p>
            <b>Oluwasegun Soji-John</b>
          </p>
          <p>Software Engineer</p>
        </div>
        <div className="page-container">
          <ul className="page-navigation">
            <li className="page-button">
              <a href="/">
                <HomeIcon size={15} />
                <p>Home</p>
              </a>
            </li>

            <li>
              <div className="page-button">
                <a href="/about">
                  <UserIcon size={15} />
                  <p>About</p>
                </a>
              </div>
            </li>
            <li>
              <div className="page-button">
                <a href="/skills">
                  <CodeXmlIcon size={15} />
                  <p>Skills</p>
                </a>
              </div>
            </li>
            <li>
              <div className="page-button">
                <a href="/projects">
                  <FolderGit2Icon size={15} />
                  <p>Projects</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="location">
          <MapPinIcon size={25} />
          <p>Maryland, USA</p>
        </div>
      </nav>
    </>
  );
}
