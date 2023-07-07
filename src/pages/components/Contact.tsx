import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faTelegram,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Contacts() {
  return (
    <div className="flex justify-between w-80 mt-32">
      <a href="#">
        <FontAwesomeIcon icon={faGithub} size="3x" className="text-zinc-50" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faLinkedin} size="3x" className="text-zinc-50" />
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
