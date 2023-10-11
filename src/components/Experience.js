import { useContext } from "react";
import { context } from "../context";

const experiences = [
  {
    id: 1,
    image: "assets/img/experience/1.jpg",
    date: "2021 - Present",
    company: "Senior Front-End Engineer",
    designation: "Opstical",
    description: "Startup tech company that excels in delivering customized applications and projects, meeting the diverse needs of clients."
  },
  {
    id: 2,
    image: "assets/img/experience/2.jpg",
    date: "2016 - 2017",
    company: "Marketing Intern",
    designation: "cPrime",
    description: "Global strategic consulting firm specializing in transforming client ideas into actionable results with accelerated speed through our comprehensive services, including consulting, training, development, and tailor-made solutions."
  },
  {
    id: 3,
    image: "assets/img/experience/3.jpg",
    date: "2019 - 2020",
    company: "Full Stack Web Development",
    designation: "UC Berkeley Extension",
    description: "#"
  },
  {
    id: 4,
    image: "assets/img/experience/4.jpg",
    date: "2016",
    company: "BS Business Administration in Marketing",
    designation: "San Jose State University",
    description: "#"
  },
];
const Experience = () => {
  const { modalToggle, setexperienceModal } = useContext(context);
  return (
    <div className="elisc_tm_experience w-full float-left bg-[#F3F9FF] pt-[100px] pb-[70px] px-0">
      <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
        <div className="elisc_tm_title w-full float-left">
          <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
            - Experience
          </span>
          <h3 className="text-[40px] font-extrabold">Everything about me!</h3>
        </div>
        <div className="list w-full float-left mt-[40px]">
          <ul className="ml-[-30px] flex flex-wrap">
            {experiences.map((experience) => (
              <li
                className="mb-[40px] pl-[30px] float-left w-1/2"
                key={experience.id}
              >
                <img
                  className="popup_image"
                  src="assets/img/experience/1.jpg"
                  alt="image"
                />
                <div className="list_inner w-full float-left clear-both bg-white rounded-[4px] px-[70px] py-[45px] relative">
                  <div className="short w-full float-left flex justify-between mb-[16px]">
                    <div className="job">
                      <span className="text-yellow-color font-medium inline-block mb-[4px]">
                        -{experience.date}
                      </span>
                      <h3 className="text-[20px]">{experience.designation}</h3>
                    </div>
                    <div className="place">
                      <span className="font-medium font-inter">
                        -{experience.company}
                      </span>
                    </div>
                  </div>
                  <div className="text w-full float-left">
                    <p className="opacity-[0.7]">
                      {experience.description}
                    </p>
                  </div>
                  <a
                    className="elisc_tm_full_link absolute inset-0 z-[5]"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      modalToggle(true);
                      setexperienceModal(experience);
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Experience;
