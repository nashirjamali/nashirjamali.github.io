import Link from "next/link";
import {
  faGithub,
  faInstagram,
  faMedium,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

const AboutMe = () => {
  return (
    <div id="aboutme" className="py-24 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-indigo-400 font-bold text-lg tracking-widest">
        KNOW MYSELF
      </div>
      <div className="grid grid-cols-2 gap-20">
        <div>
          <h1 className="text-gray-900 font-semibold text-4xl mt-10">
            About Me
          </h1>
          <p className="text-base font-normal text-gray-500 mt-8 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            quae, doloremque placeat similique magni esse fuga explicabo facilis
            recusandae nulla culpa quidem quasi, amet consequatur autem earum
            eius beatae? Odit?
          </p>
          <div className="flex items-stretch mt-10">
            <p className="text-gray-900 font-semibold mr-8">Follow me on</p>
            <div className="bg-gray-900 h-0.5 w-20 self-center"></div>
          </div>
          <div className="flex mt-4">
            <div
              className="border-2 border-gray-900 rounded-sm w-10 h-10 flex flex-wrap justify-center content-center mr-4
              hover:bg-pink-600 hover:border-pink-600 text-gray-900 hover:text-white
            cursor-pointer"
            >
              <Link href="https://instagram.com/nashir_j">
                <FontAwesomeIcon className="fa-lg" icon={faInstagram} />
              </Link>
            </div>
            <div
              className="border-2 border-gray-900 rounded-sm w-10 h-10 flex flex-wrap justify-center content-center mr-4
            hover:bg-gray-500 hover:border-gray-500 text-gray-900 hover:text-white
            cursor-pointer"
            >
              <Link href="https://github.com/nashirjamali">
                <FontAwesomeIcon className="fa-lg" icon={faGithub} />
              </Link>
            </div>
            <div
              className="border-2 border-gray-900 rounded-sm w-10 h-10 flex flex-wrap justify-center content-center
            hover:bg-black hover:border-black text-gray-900 hover:text-white
            cursor-pointer"
            >
              <Link href="https://github.com/nashirjamali">
                <FontAwesomeIcon className="fa-lg" icon={faMedium} />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-gray-900 font-semibold text-2xl mt-14">
            What I Do ?
          </h1>
          <p className="text-base font-normal text-gray-500 mt-3 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            quae, doloremque placeat similique magni esse fuga explicabo facilis
            recusandae nulla culpa quidem quasi, amet consequatur autem earum
            eius beatae? Odit?
          </p>
        </div>
      </div>
      <div className="mt-16">
        <h1 className="text-gray-900 font-semibold text-2xl mt-10">
          Expertise
        </h1>
        <div className="grid grid-cols-6 mt-8">
          <div>
            <h5 className="text-gray-600 font-semibold">Frontend</h5>
            <ul className="mt-2">
              <li className="text-gray-500">React JS</li>
              <li className="text-gray-500">Next JS</li>
              <li className="text-gray-500">Vue JS</li>
              <li className="text-gray-500">Bootstrap</li>
              <li className="text-gray-500">Tailwind CSS</li>
              <li className="text-gray-500">React Native</li>
            </ul>
          </div>
          <div>
            <h5 className="text-gray-600 font-semibold">Backend</h5>
            <ul className="mt-2">
              <li className="text-gray-500">Go</li>
              <li className="text-gray-500">Node JS</li>
              <li className="text-gray-500">Mongo DB</li>
              <li className="text-gray-500">SQL</li>
              <li className="text-gray-500">Kafka</li>
              <li className="text-gray-500">Lumen</li>
            </ul>
          </div>
          <div>
            <h5 className="text-gray-600 font-semibold">Website</h5>
            <ul className="mt-2">
              <li className="text-gray-500">Laravel</li>
              <li className="text-gray-500">CodeIgneter</li>
            </ul>
          </div>
          <div>
            <h5 className="text-gray-600 font-semibold">Tools</h5>
            <ul className="mt-2">
              <li className="text-gray-500">DataGrip</li>
              <li className="text-gray-500">Figma</li>
              <li className="text-gray-500">Postman</li>
              <li className="text-gray-500">VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
