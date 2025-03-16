import { motion } from "framer-motion";
export default function Skills() {
  const arr1 = ["Python", "Javascript", "Typescript", "R"];
  const arr2 = ["HTML", "CSS"];
  const arr3 = [
    "Next js",
    "Pandas",
    "React",
    "Flask",
    "Seaborn",
    "Matplotlib",
    "Mongo DB",
    "Tailwind",
    "Numpy",
    "APIs",
  ];
  const arr4 = ["Git", "Github", "Docker", "Figma"];
  return (
    <>
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="Categories">
          <h3 className="category-name">Languages</h3>
          <ul className="items">
            {arr1.map((skill, index) => (
              <motion.span
                initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
                animate={{ x: 0, opacity: 1 }} // Move to position
                transition={{ duration: 1.5, delay: index * 0.2 }} // Staggered effect
                className="items-span"
                key={index}
              >
                <li>{skill}</li>
              </motion.span>
            ))}
          </ul>
        </div>

        <div className="Categories">
          <h3 className="category-name">Web Development</h3>
          <ul className="items">
            {arr2.map((skill, index) => (
              <motion.span
                initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
                animate={{ x: 0, opacity: 1 }} // Move to position
                transition={{ duration: 1.5, delay: index * 0.2 }} // Staggered effect
                className="items-span"
                key={index}
              >
                <li>{skill}</li>
              </motion.span>
            ))}
          </ul>
        </div>

        <div className="Categories">
          <h3 className="category-name">Frameworks & Libraries</h3>
          <ul className="items">
            {arr3.map((skill, index) => (
              <motion.span
                initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
                animate={{ x: 0, opacity: 1 }} // Move to position
                transition={{ duration: 1.5, delay: index * 0.2 }} // Staggered effect
                className="items-span"
                key={index}
              >
                <li>{skill}</li>
              </motion.span>
            ))}
          </ul>
        </div>

        <div className="Categories">
          <h3 className="category-name">Dev Tools</h3>
          <ul className="items">
            {arr4.map((skill, index) => (
              <motion.span
                initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
                animate={{ x: 0, opacity: 1 }} // Move to position
                transition={{ duration: 1.5, delay: index * 0.2 }} // Staggered effect
                className="items-span"
                key={index}
              >
                <li>{skill}</li>
              </motion.span>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
