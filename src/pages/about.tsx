export default function About() {
  return (
    <>
      <div>
        <div className="Intro">
          <h2>Hey, I am Oluwasegun Soji-John</h2>
          <p>Computer Science Major at Morgan State University.</p>
          <p>
            I'm a software engineering and data science enthusiast. As a
            research assistant at the Machine Intelligence and Data Science
            (MINDS) Lab (Morgan State), I work on backend web development
            projects, building efficient systems and APIs. I also tutor college
            students in programming and algorithms. Passionate about solving
            real-world problems through software and data, I'm always exploring
            new challenges at the intersection of engineering and analytics.
          </p>
          <p>
            A fun fact about me is that I play table tennis (Ping pong) and I'm
            also a tryhard in Call Of Duty Mobile.
          </p>
        </div>

        <div className="About Me">
          <h2>About Me</h2>
          <p>
            I'm a software engineering and data science enthusiast. As a
            research assistant at the Machine Intelligence and Data Science
            (MINDS) Lab (Morgan State), I work on backend web development
            projects, building efficient systems and APIs. I also tutor college
            students in programming and algorithms. Passionate about solving
            real-world problems through software and data, I'm always exploring
            new challenges at the intersection of engineering and analytics.
          </p>
          <p>
            A fun fact about me is that I play table tennis (Ping pong) and I'm
            also a tryhard in Call Of Duty Mobile.
          </p>
        </div>


        <div className="Experience">
          <h3>Experience</h3>
          <ul>
            <li>
              <h4 className="role">Undergraduate Researcher</h4>
              {/* <span>
                <p className="company">MINDS LAB</p>
                <p className="date"> -Present</p>
              </span> */}
              <p className="role-description">
              I design and develop backend systems, REST APIs, and data pipelines to support research at the MINDS Lab. My work involves optimizing database performance, automating data workflows, and integrating structured datasets into web-based research platforms, improving data accessibility and analysis.
              </p>
            </li>
            <li>
              <h4 className="role"></h4>
              <span>
                <p className="company"></p>
                <p className="date"></p>
              </span>
              <p className="role-description"></p>
            </li>
            <li>
              <h4 className="role"></h4>
              <span>
                <p className="company"></p>
                <p className="date"></p>
              </span>
              <p className="role-description"></p>
            </li>
            <li>
              <h4 className="role"></h4>
              <span>
                <p className="company"></p>
                <p className="date"></p>
              </span>
              <p className="role-description"></p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
