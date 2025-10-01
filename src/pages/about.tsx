export default function About() {
  return (
    <>
      <div className="about-container">
        <div className="Intro">
          <h2 className="text-theme">About Me</h2>
          <p>
            I'm a software engineering and data science enthusiast. Currently, I
            am a computer science major at Morgan State Univeristy. My primary
            interests lie in software engineering, data science, and backend
            development, where I enjoy crafting efficient, scalable systems and
            working on projects that make a difference. A fun fact about me is
            that I play table tennis (Ping pong) and I'm also a tryhard in Call
            Of Duty Mobile.
          </p>
        </div>

        <div className="What I do">
          <h2 className="text-theme">What I do</h2>
          <p>
            I specialize in developing robust backend systems and APIs using
            tools like Python, JavaScript, TypeScript, Flask and FastAPI. I also enjoy
            working on data-driven projects that require analyzing complex
            datasets and extracting meaningful insights. Whether it's optimizing
            code for performance or solving real-world problems, I'm always
            excited to push boundaries. Also, I am currently
            an undergraduate researcher at the Machine Intelligence and Data
            Science (MINDS) Lab (at Morgan State University). I work on backend web
            development projects, building efficient systems and APIs. In
            addition, I tutor college students in programming. I have a passion
            for solving real-world problems through software and data, I'm
            always exploring new challenges at the intersection of engineering
            and analytics.
          </p>
        </div>

        <div className="Experience">
          <h2 className="text-theme">Experience</h2>
          <p className="role-description">
            During my time as a Software Engineer Intern at Oracle, I designed
            and built an AI-powered agent for the Oracle Enterprise Scheduler
            Service (ESS) in Oracle ERP. This project enabled natural language
            interaction with ESS, allowing users to query job statuses, launch
            jobs, and parse error logs through simple commands—removing the
            complexity of navigating a dense enterprise UI. I worked with
            Oracle's AI Agent Studio, Fusion APIs, and Python to deliver a
            functional prototype that improved usability and provided
            performance insights for business users. This experience deepened my
            skills in enterprise API integration, conversational AI design, and
            user-centric engineering. Beyond my internship, I co-created Fathom,
            a full-stack web application that lets students upload lecture
            recordings, generates real-time transcripts, and summarizes key
            points. On the research side, I've worked on projects at the
            intersection of health informatics and data science—including
            building a semantic knowledge graph to analyze healthcare
            disparities, conducting geospatial analysis of healthcare deserts,
            and developing a knowledge graph for Coronary Heart Disease using
            structured mortality data and clinical narratives. These projects
            strengthened my ability to combine data science, natural language
            processing, and software engineering to drive insights and
            solutions.
          </p>
        </div>

        <div className="">
          <h2 className="text-theme">What Drives Me</h2>
          <p>
            Technology has the power to change the world, and that's what drives
            me every day. I thrive on problem-solving and learning new
            technologies, whether it's through competitive programming, personal
            projects, or collaborating with others. When I'm not coding, you'll
            likely find me mentoring students in programming, participating in
            hackathons, or staying up-to-date with the latest tech trends.
          </p>
        </div>
        <div className="">
          <h2 className="text-theme">Let's Connect</h2>
          <p>
            Feel free to reach out if you're interested in discussing
            collaboration, exciting projects, or new opportunities! I'm always
            open to meeting like-minded individuals and exploring ways we can
            leverage technology to create positive change. You can connect with
            me on{" "}
            <a
              href="https://www.linkedin.com/in/oluwasegun-soji-john/ "
              target="_blank"
              className="linkedin-link"
            >
              LinkedIn
            </a>{" "}
            or check out my work on{" "}
            <a href="https://github.com/Oluwasegun-rm " target="_blank">
              Github
            </a>
            , or send me an email at email. Thanks for stopping by! 🚀
          </p>
        </div>
      </div>
    </>
  );
}
