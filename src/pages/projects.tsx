export default function Projects() {
  return (
    <>
      <div>
        <h2>Projects</h2>
        <p>
          Welcome to my projects! Here, you can explore some of the work I've
          done during my personal projects and research. These projects showcase
          my skills in software development, data science, and research, where
          I've focused on building scalable systems, analyzing complex data, and
          creating innovative solutions to real-world problems. Feel free to
          dive in and explore the details of each project!
        </p>

        <div className="project-box">
          <p className="project-name">Fathom</p>
          <p className="tech-stack">
            Python,Javascript, Mongo DB, Fast API, Redis
          </p>
          <p className="project-description">
            Fathom is a web app that provides real-time transcriptions of
            lecture recordings using the Fast Whisper model. It generates
            searchable transcripts and extracts key points, making it easier for
            users to review and identify important content. I contributed to the
            backend development, integrating the Fast Whisper model and building
            the system to handle real-time transcription and data processing.
            Key Features: Real-Time Transcription, Key Point Extraction and
            Searchable Transcripts. Fathom aims to enhance the learning
            experience by providing quick and accessible lecture summaries.
          </p>
        </div>

        <div className="project-box">
          <p className="project-name">
            Geospatial Analysis of Health Disparities in Healthcare Deserts
          </p>
          <p className="tech-stack">Python, Pandas, Matplotlib, Seaborn</p>
          <p className="project-description">
            As part of a research project, I analyzed health disparities in
            underserved areas (healthcare deserts) using geospatial data. This
            project aimed to identify healthcare access issues and their
            correlation with various social factors, contributing to a better
            understanding of public health in at-risk communities. I worked with
            the team to collect and process large datasets, applying data
            visualization techniques to highlight key findings.
          </p>
        </div>

        <div className="project-box">
          <p className="project-name">
            Semantic Knowledge Graph for Coronary Heart Disease
          </p>
          <p className="tech-stack">Python, Pandas, OpenAi API, Seaborn</p>
          <p className="project-description">
            This project focused on creating a semantic knowledge graph that
            integrates structured mortality data and unstructured clinical
            narratives to provide deeper insights into Coronary Heart Disease.
            We employed advanced natural language processing (NLP) techniques to
            extract meaningful patterns and trends from clinical data,
            contributing to more effective public health surveillance. I worked
            on data integration and semantic querying, helping to merge various
            data sources and ensure accurate analysis.
          </p>
        </div>

        <div className="project-box">
          <p className="project-name">Personal Finance Tracker</p>
          <p className="tech-stack">Python, Javascript, Numpy</p>
          <p className="project-description">
            Personal Finance Tracker is a web application designed to help users
            manage and track their expenses, income, and overall financial
            health. Built using Python for the backend and JavaScript for the
            frontend, this tool provides users with a simple yet effective way
            to monitor their financial activity. The app allows users to add and
            categorize transactions, view real-time financial summaries, and
            generate visual reports for better budgeting and financial planning.
            I was responsible for developing the backend logic in Python to
            handle data storage and calculations, while also contributing to the
            frontend in JavaScript to create an interactive, user-friendly
            interface.
          </p>
        </div>
      </div>
    </>
  );
}
