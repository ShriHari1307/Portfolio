import PropTypes from "prop-types";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Education({ handleScroll, isDarkMode }) {
  const backgroundColor = isDarkMode
    ? "linear-gradient(to right, #0f2027, #203a43, #2c5364)" // Dark blue-green gradient
    : "linear-gradient(to right, #f9f9f9, #e4f1fe)"; // Light gray-blue gradient

  const textColor = isDarkMode ? "#ecf0f1" : "#2c3e50"; // Light for dark mode, dark for light mode
  const subTextColor = isDarkMode ? "#b0bec5" : "#607d8b"; // Muted colors for subtext
  const arrowColor = isDarkMode ? "#2c5364" : "#90caf9"; // Complementary gradient shades
  const lineColor = isDarkMode ? "#ecf0f1" : "#455a64"; // Line color matching the theme

  return (
    <section id="education">
      <div
        className={`flex flex-col items-center py-12 transition-colors duration-300 ${
          isDarkMode
            ? "bg-black text-gray-200"
            : "bg-gradient-to-r from-[#f0f4f8] to-[#e1e8ee] text-gray-800"
        }`}
      >
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-wide">
            Education & Career Timeline
          </h1>
          <p className="text-base mt-2 font-light text-gray-500">
            A journey through my academic and professional milestones
          </p>
        </div>
        <VerticalTimeline
          lineColor={lineColor}
          className="vertical-timeline-custom"
        >
          {/* College */}
          <VerticalTimelineElement
            contentStyle={{
              background: backgroundColor,
              color: textColor,
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
            contentArrowStyle={{ borderRight: `7px solid ${arrowColor}` }}
            iconStyle={{ background: arrowColor }}
            icon={
              <img
                src="college.png"
                alt="college icon"
                className="rounded-full"
              />
            }
          >
            <h3 className="text-2xl font-bold">
              Panimalar Engineering College
            </h3>
            <h4 className="text-lg font-semibold mt-1">{`2020 - 2024`}</h4>
            <h4
              className="text-base font-medium"
              style={{ color: subTextColor }}
            >
              Chennai, Tamil Nadu
            </h4>
            <p className="mt-3">
              Computer Science and Engineering
              <br />
              <span className="font-bold">8.78 GPA</span>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-justify">
                <li>
                  Successfully led a team in the prestigious{" "}
                  <strong>Kavach Hackathon</strong>, demonstrating leadership,
                  strategic planning, and collaborative problem-solving skills.
                </li>
                <li>
                  Acquired hands-on expertise in advanced technologies including
                  AWS Cloud, Java, Computer Networks, Data Structures and
                  Algorithms (DSA), and Machine Learning (ML).
                </li>
                <li>
                  Achieved globally recognized certifications, including AWS and
                  Red Hat, showcasing proficiency in cloud computing and system
                  administration.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>

          {/* 12th Grade */}
          <VerticalTimelineElement
            contentStyle={{
              background: backgroundColor,
              color: textColor,
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
            contentArrowStyle={{ borderRight: `7px solid ${arrowColor}` }}
            iconStyle={{ background: arrowColor }}
            icon={
              <img
                src="school.png"
                alt="school icon"
                className="rounded-full"
              />
            }
          >
            <h3 className="text-2xl font-bold">Maharishi Vidya Mandir</h3>
            <h3 className="text-xl font-bold">12th standard</h3>
            <h4 className="text-lg font-semibold mt-1">{`2020`}</h4>
            <h4
              className="text-base font-medium"
              style={{ color: subTextColor }}
            >
              Chennai, Tamil Nadu
            </h4>
            <p className="mt-3">
              <ul className="list-disc pl-6 mt-3 space-y-2 text-justify">
                <li className="font-medium">
                  Designed and developed mini projects using C++, focusing on
                  problem-solving and optimization.
                </li>
                <li className="font-medium">
                  Gained in-depth knowledge of MySQL and data management
                  techniques, including designing and querying relational
                  databases.
                </li>
                <li className="font-medium">
                  Expanded my understanding of algorithms and data structures,
                  laying a strong foundation for efficient coding practices.
                </li>
                <li className="font-medium">
                  Built a Student management system as a capstone project,
                  integrating database connectivity with a user-friendly
                  interface.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>

          {/* 10th Grade */}
          <VerticalTimelineElement
            contentStyle={{
              background: backgroundColor,
              color: textColor,
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
            contentArrowStyle={{ borderRight: `7px solid ${arrowColor}` }}
            iconStyle={{ background: arrowColor }}
            icon={
              <img
                src="school.png"
                alt="school icon"
                className="rounded-full"
              />
            }
          >
            <h3 className="text-2xl font-bold">Maharishi Vidya Mandir</h3>
            <h3 className="text-xl font-bold">10th standard</h3>
            <h4 className="text-lg font-semibold mt-1">{`2018`}</h4>
            <h4
              className="text-base font-medium"
              style={{ color: subTextColor }}
            >
              Chennai, Tamil Nadu
            </h4>
            <p className="mt-3">
              <ul className="list-disc pl-6 mt-3 space-y-2 text-justify">
                <li className="font-medium">
                  Wrote my first program in C, a <strong>Hello World</strong>{" "}
                  application, sparking my passion for programming.
                </li>
                <li className="font-medium">
                  Explored the basics of computer science and technology,
                  including understanding hardware components and software
                  functionality.
                </li>
                <li className="font-medium">
                  Gained early exposure to logical thinking and problem-solving
                  techniques through beginner-level coding exercises.
                </li>
                <li className="font-medium">
                  Participated in group activities and projects, enhancing
                  collaboration and communication skills.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <div className="mt-8 text-center">
          <div className="w-12 h-1 bg-gray-400 mx-auto mb-4"></div>
          <button
            className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center shadow-md transition-all no-hover ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
            onClick={() => handleScroll("projects")}
          >
            ↓
          </button>
        </div>
      </div>
    </section>
  );
}

Education.propTypes = {
  handleScroll: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};
