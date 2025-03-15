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
            tools like Python, JavaScript, TypeScript, and FastAPI. I also enjoy
            working on data-driven projects that require analyzing complex
            datasets and extracting meaningful insights. Whether it's optimizing
            code for performance or solving real-world problems, I'm always
            excited to push the boundaries of technology. Also, I am currently
            an undergraduate researcher at the Machine Intelligence and Data
            Science (MINDS) Lab (Morgan State). I work on backend web
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
            Throughout my academic journey, I've had the opportunity to work on
            some exciting projects. One of my key projects involved developing a
            real-time lecture transcription tool, where I integrated the Fast
            Whisper model for seamless speech-to-text conversion. Additionally,
            I collaborated on a semantic knowledge graph project, focusing on
            analyzing healthcare disparities by combining structured and
            unstructured data to uncover patterns and insights. In addition to
            my projects, I've also been involved in research. I worked on a
            project aimed at geospatial analysis of health disparities in
            healthcare deserts, where we analyzed data to identify trends and
            correlations. I was also a part of a team developing a knowledge
            graph for Coronary Heart Disease, combining structured mortality
            data and clinical narratives to better understand health trends.
            This interdisciplinary work merges health informatics, data science,
            and natural language processing to improve public health insights.
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
            me on
            <div className="linkedin-link">
              <a
                href="https://www.linkedin.com/in/oluwasegun-soji-john/ "
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
            or check out my work on
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
