import PropTypes from "prop-types";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Education({ handleScroll, isDarkMode }) {
  const backgroundColor = isDarkMode
    ? "linear-gradient(to right, #2b2b2b, #3f3f3f)"
    : "linear-gradient(to right, #ffffff, #f3f3f3)";
  const textColor = isDarkMode ? "#fff" : "#000";
  const subTextColor = isDarkMode ? "#aaa" : "#666";
  const arrowColor = isDarkMode ? "#3f3f3f" : "#e5e5e5";
  const lineColor = isDarkMode ? "#fff" : "#000";

  return (
    <div
      className={`flex flex-col items-center transition-colors duration-300 ${
        isDarkMode ? "bg-[#1e1e1e] text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Education & Career Timeline</h1>
        <p className="text-sm mt-2">
          A journey through my academic and professional milestones
        </p>
      </div>
      <VerticalTimeline
        lineColor={lineColor}
        className={`before:border-l-2 ${
          isDarkMode ? "before:border-white" : "before:border-black"
        }`}
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: backgroundColor,
            color: textColor,
            padding: "20px",
            borderRadius: "10px",
          }}
          contentArrowStyle={{ borderRight: `7px solid ${arrowColor}` }}
          iconStyle={{ background: arrowColor }}
          icon={<img src="college.png" className="rounded-full" />}
        >
          <h3 className="text-xl font-bold">Panimalar Engineering College</h3>
          <h3 className="text-lg font-semibold mt-1">{`2020 - 2024`}</h3>
          <h4 className="text-base font-medium" style={{ color: subTextColor }}>
            Chennai, Tamil Nadu
          </h4>
          <p className="mt-3">
            Computer Science and Engineering
            <br />
            <span className="font-bold">8.78 GPA</span>
            <ul className="list-disc pl-6 mt-3">
              <li>
                Participated in the <strong>Kavach Hackathon</strong> as a team
                leader.
              </li>
              <li>
                Gained knowledge in AWS Cloud, Java, Computer Networks, DSA, ML,
                and other technologies.
              </li>
              <li>Earned multiple global certifications in AWS and Red Hat.</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        {/* Repeat similar changes for other VerticalTimelineElements */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: backgroundColor,
            color: textColor,
            padding: "20px",
            borderRadius: "10px",
          }}
          contentArrowStyle={{ borderRight: `7px solid ${arrowColor}` }}
          iconStyle={{ background: arrowColor }}
          icon={<img src="school.png" className="rounded-full" />}
        >
          <h3 className="text-lg font-semibold">12th Grade</h3>
          <h3 className="text-xl font-bold">Maharishi Vidya Mandir</h3>
          <h3 className="text-lg font-semibold">{`2019 - 2020`}</h3>
          <h4 className="text-base font-medium" style={{ color: subTextColor }}>
            Chennai, Tamil Nadu
          </h4>
          <p className="mt-3">
            <ul className="list-disc pl-6 mt-3 text-lg space-y-2">
              <li className="font-medium">
                Designed and developed mini projects using C++, focusing on
                problem-solving and optimization.
              </li>
              <li className="font-medium">
                Gained in-depth knowledge of MySQL, including advanced queries,
                database optimization, and data management techniques.
              </li>
              <li className="font-medium">
                Deepened my passion for computer science, expanding my
                understanding of algorithms, data structures, and software
                development practices.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: backgroundColor,
            color: textColor,
            padding: "20px",
            borderRadius: "10px",
          }}
          contentArrowStyle={{ borderRight: `7px solid ${arrowColor}` }}
          iconStyle={{ background: arrowColor }}
          icon={<img src="school.png" className="rounded-full" />}
        >
          <h3 className="text-lg font-semibold">10th Grade</h3>
          <h3 className="text-xl font-bold">Maharishi Vidya Mandir</h3>
          <h3 className="text-lg font-semibold">{`2019 - 2020`}</h3>
          <h4 className="text-base font-medium" style={{ color: subTextColor }}>
            Chennai, Tamil Nadu
          </h4>
          <p className="mt-3">
            <ul className="list-disc pl-6 mt-3 text-lg space-y-2">
              <li className="font-medium">
                My interest in technology began in 10th grade, where I first
                explored the fundamentals of computer science.
              </li>
              <li className="font-medium">
                During this time, I wrote my first program in C, a simple{" "}
                <strong>Hello World </strong> application, which sparked my
                curiosity and passion for programming.
              </li>
              <li className="font-medium">
                This early exposure laid the foundation for my continued
                learning and growth in the tech field.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className="mt-8 text-center">
        <div className="w-12 h-1 bg-gray-400 mx-auto mb-2"></div>
        <button
          className={`w-8 h-8 rounded-full mx-auto mt-4 flex items-center justify-center transition-colors ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          }`}
          onClick={() => handleScroll("projects")}
        >
          ↓
        </button>
      </div>
    </div>
  );
}

Education.propTypes = {
  handleScroll: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};
