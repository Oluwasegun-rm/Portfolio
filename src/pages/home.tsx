import { Link2Icon, } from "lucide-react";

export function Home() {
  return (
    <>
    <div className="home-container">
      <div className="image-container">
        <img src="/assets/my-notion-face-portrait.png" alt="sj" className="image" />
      </div>

      <div className="">
        <p className="intro-paragraph">
          Hi I am Oluwasegun Soji-John, a Software Engineer with interests in Data Science.
        </p>
      </div>

      <div className="areas">
        <span>
          Backend
        </span>

        <span>
          Frontend
        </span>

        <span>
          Data Science
        </span>
        
        <span>
          Machine Learning
        </span>
      </div>

      <div className="connect-container">
        <a href="" className="connect-link">
          <Link2Icon size={20}/>
          <span>Connect With Me</span>
          
        </a>
      </div>

    </div>
    </>
  )
}