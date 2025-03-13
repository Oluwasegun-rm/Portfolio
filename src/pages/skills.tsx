export default function Skills() {
  return (
    <>
      <div>
        <h2>My Skills</h2>
        <div className="Categories">
          <p className="category-name">Languages</p>
          <ul>
            <li>Python</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>R</li>
          </ul>
        </div>


        <div className="Categories">
          <p className="category-name">Web Development</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        <div className="Categories">
          <p className="category-name">Frameworks & Libraries</p>
          <ul className="Items">
            <li>Next js</li>
            <li> Pandas</li>
            <li>React</li>
            <li>Flask</li>
            <li>APIs</li>
            <li>Seaborn</li>
            <li>Matplotlib</li>
            <li>MongoDB</li>
            <li>Tailwind</li>
            <li>Numpy</li>
          </ul>
        </div>

        <div className="Categories">
          <p className="category-name">Dev Tools</p>
          <ul>
            <li>Git</li>
            <li>Github</li>
            <li>Figma</li>
            <li>Docker</li>
          </ul>
        </div>
        
      </div>
    </>
  );
}
