import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faTelegram,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contacts() {
  return (
    <div className="flex justify-between w-96 mb-32 mt-24 mx-auto">
      <a href="https://github.com/Martin-Wanangwa-Nyirenda">
        <FontAwesomeIcon icon={faGithub} size="3x" className="text-zinc-50" />
      </a>
      <a href="https://www.linkedin.com/in/martin-nyirenda">
        <FontAwesomeIcon icon={faLinkedin} size="3x" className="text-zinc-50" />
      </a>
      <a href="mailto:martinnyirenda8@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} size="3x" className="text-zinc-50" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faTelegram} size="3x" className="text-zinc-50" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faTwitter} size="3x" className="text-zinc-50" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faFacebook} size="3x" className="text-zinc-50" />
      </a>
      <a href="#">
        <FontAwesomeIcon
          icon={faInstagram}
          size="3x"
          className="text-zinc-50"
        />
      </a>
    </div>
  );
}
