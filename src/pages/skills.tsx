export default function Skills() {
  return (
    <>
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="Categories">
          <h3 className="category-name">Languages</h3>
          <ul className="items">
            <span className="items-span">
              <li>Python</li>
            </span>
            <span className="items-span">
              <li>Javascript</li>
            </span>
            <span className="items-span">
              <li>Typescript</li>
            </span>
            <span className="items-span">
              <li>R</li>
            </span>
          </ul>
        </div>

        <div className="Categories">
          <h3 className="category-name">Web Development</h3>
          <ul className="items">
            <span className="items-span">
              <li>HTML</li>
            </span>
            <span className="items-span">
              <li>CSS</li>
            </span>
          </ul>
        </div>

        <div className="Categories">
          <h3 className="category-name">Frameworks & Libraries</h3>
          <ul className="items">
            <span className="items-span">
              <li className="skill">Next js</li>
            </span>
            <span className="items-span">
              <li className="skill"> Pandas</li>
            </span>

            <span className="items-span">
              <li className="skill">React</li>
            </span>

            <span className="items-span">
              <li className="skill">Flask</li>
            </span>

            <span className="items-span">
              <li className="skill">APIs</li>
            </span>

            <span className="items-span">
              <li className="skill">Seaborn</li>
            </span>

            <span className="items-span">
              <li className="skill">Matplotlib</li>
            </span>

            <span className="items-span">
              <li className="skill">MongoDB</li>
            </span>
            <span className="items-span">
              <li className="skill">Tailwind</li>
            </span>
            <span className="items-span">
              <li className="skill">Numpy</li>
            </span>
          </ul>
        </div>

        <div className="Categories">
          <h3 className="category-name">Dev Tools</h3>
          <ul className="items">
            <span className="items-span">
              <li className="skill">Git</li>
            </span>
            <span className="items-span">
              <li className="skill">Github</li>
            </span>
            <span className="items-span">
              <li className="skill">Figma</li>
            </span>
            <span className="items-span">
              <li className="skill">Docker</li>
            </span>
          </ul>
        </div>
      </div>
    </>
  );
}
