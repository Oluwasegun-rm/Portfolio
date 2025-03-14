import { Link2Icon } from "lucide-react";
import { motion } from "framer-motion";
export function Home() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <motion.div
        className="home-container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="image-container" variants={item}>
          <img
            src="/assets/my-notion-face-portrait.png"
            alt="sj"
            className="image"
          />
        </motion.div>

        <motion.div variants={item} className="">
          <p className="intro-paragraph">
            Hi I am Oluwasegun Soji-John, a Software Engineer with interests in
            Data Science.
          </p>
        </motion.div>

        <motion.div variants={item} className="areas">
          <span>Backend</span>

          <span>Frontend</span>

          <span>Data Science</span>

          <span>Machine Learning</span>
        </motion.div>

        <motion.div variants={item} className="connect-container">
          <a href="" className="connect-link">
            <Link2Icon size={20} />
            <span>Connect With Me</span>
          </a>
        </motion.div>
      </motion.div>
    </>
  );
}
