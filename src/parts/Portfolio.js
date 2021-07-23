import Link from "next/link";
import IconInstagram from "public/images/icon-instagram.svg";
import IconGithub from "public/images/icon-github.svg";

const Portfolio = () => {
  return (
    <div className="bg-gray-200">
      <div className="py-24 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-indigo-400 font-bold text-lg tracking-widest">
          PORTFOLIO
        </div>
        <h1 className="text-gray-900 font-semibold text-4xl mt-10">
          Recent Project
        </h1>
        <p className="text-base font-normal text-gray-500 mt-8 leading-6">
          preparing ...
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
