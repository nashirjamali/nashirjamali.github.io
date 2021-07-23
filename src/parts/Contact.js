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

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="py-24 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-indigo-400 font-bold text-lg tracking-widest">
          CONTACT
        </div>
        <h1 className="text-gray-900 font-semibold text-4xl mt-5">
          Contact me
        </h1>
        <div className="mt-8">
          <p className="text-gray-700 text-xl leading-9">
            You can contact via email at <span> </span>
            <a
              href="mailto:nashirjamali@gmail.com"
              className="font-bold hover:underline hover:text-orange-500"
            >
              nashirjamali@gmail.com,
            </a>
            <br />
            or via my socials:
          </p>
          <div className="mt-5">
            <div className="text-gray-700 text-base flex items-stretch mt-2">
              <FontAwesomeIcon className="fa-lg" icon={faInstagram} />
              <a
                href="https://instagram.com/nashir_j"
                className="font-semibold ml-4 hover:underline self-center hover:text-orange-500"
              >
                Instagram
              </a>
            </div>
            <div className="text-gray-700 text-base flex items-stretch mt-2">
              <FontAwesomeIcon className="fa-lg" icon={faGithub} />
              <a
                href="https://github.com/nashirjamali"
                className="font-semibold ml-4 hover:underline self-center hover:text-orange-500"
              >
                Github
              </a>
            </div>
            <div className="text-gray-700 text-base flex items-stretch mt-2">
              <FontAwesomeIcon className="fa-lg" icon={faMedium} />
              <a
                href="https://medium.com/@nashirjamali"
                className="font-semibold ml-4 hover:underline self-center hover:text-orange-500"
              >
                Medium
              </a>
            </div>
            <div className="text-gray-700 text-base flex items-stretch mt-2">
              <FontAwesomeIcon className="fa-lg" icon={faTelegram} />
              <a
                href="https://t.me/nashirjamali"
                className="font-semibold ml-4 hover:underline self-center hover:text-orange-500"
              >
                Telegram
              </a>
            </div>
            <div className="text-gray-700 text-base flex items-stretch mt-2">
              <FontAwesomeIcon className="fa-lg" icon={faWhatsapp} />
              <a
                href=""
                className="font-semibold ml-4 hover:underline self-center hover:text-orange-500"
              >
                Whatsapp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
