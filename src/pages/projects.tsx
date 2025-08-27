import projects from "./projects.json";
export default function Projects() {
  return (
    <>
      <div className="project-container">
        <h1>Projects</h1>
        <p>
          Welcome to my projects! Here, you can explore some of the work I've
          done during my internship at Oracle, my personal projects and research. These projects showcase
          my skills in software development, data science, and research, where
          I've focused on building scalable systems, analyzing complex data, and
          creating innovative solutions to real-world problems. Feel free to
          dive in and explore the details of each project!
        </p>
        <div className="project-boxes-container">
          {projects.map((project, index) => (
            <div className="project-box" key = {index}>
              <div className="project-content">
                <p className="project-name">{project.title}</p>
                <p className="tech-stack">
                  {project["tech-stack"]}
                </p>
                <p className="project-description">
                  {project.description}
                </p>
                <p className="project-date">{project.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
