import { useTranslation } from "react-i18next";
import Image from "../../assets/image.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#1b4571] text-white py-10">
      <div className="container mx-auto px-4 flex flex-wrap gap-10 justify-between">
        <div className="flex flex-col items-center md:items-start flex-1 min-w-[250px]">
          <img
            src={Image}
            alt={t("schoolLogoAlt")}
            className="w-[160px] mb-4"
          />
          <p className="text-gray-300 text-center md:text-left font-semibold text-lg">
            {t("schoolMotto")}
          </p>
        </div>

        <div className="w-full md:w-[45%] lg:w-[40%] h-[300px] rounded-xl overflow-hidden shadow-xl flex-1 min-w-[280px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.7361960902113!2d68.16295497581103!3d40.10359427149165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b25f7c0001c555%3A0xe74e35f8daf7d201!2z0JfQsNGA0LHQtNCw0YDRgdC60LDRjyDRgNCw0LnQvtC90L3QsNGPINGB0L_QtdGG0LjQsNC70LjQt9C40YDQvtCy0LDQvdC90LDRjyDRiNC60L7Qu9Cw!5e0!3m2!1sru!2s!4v1757177371336!5m2!1sru!2s"
               width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            title={t("mapTitle")}
          ></iframe>
        </div>

        <div className="flex flex-col items-center md:items-start flex-1 min-w-[200px]">
          <h3 className="text-lg font-semibold mb-2">{t("navigationTitle")}</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-300">
                {t("home")}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-300">
                {t("about")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-300">
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start flex-1 min-w-[200px]">
          <h3 className="text-lg font-semibold mb-2">{t("contactUsTitle")}</h3>
          <div>
            <p className="text-[15px]">
              {t("phoneLabel")}:{" "}
              <span className="hover:text-blue-300 cursor-pointer">
                +998 99 355-83-06
              </span>{" "}
              <br />
              {t("emailLabel")}:{" "}
              <span className="hover:text-blue-300 cursor-pointer">
                zarbdorim@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start flex-1 min-w-[200px]">
          <h3 className="text-lg font-semibold mb-2">
            {t("socialMediaTitle")}
          </h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.facebook.com/piima.uz"
              className="hover:text-blue-400"
              aria-label={t("facebookAriaLabel")}
            >
              <FaFacebook />
            </a>
            <a
              href="https://t.me/piimauz"
              className="hover:text-blue-400"
              aria-label={t("telegramAriaLabel")}
            >
              <FaTelegram />
            </a>
            <a
              href="https://www.instagram.com/piima.uz/"
              className="hover:text-blue-400"
              aria-label={t("instagramAriaLabel")}
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCZFpPmVyOdPpXUcazo0Cyyw"
              className="hover:text-blue-400"
              aria-label={t("youtubeAriaLabel")}
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8border-t border-gray-500 pt-4">
        &copy; {new Date().getFullYear()} Zarbdor IM. {t("copyrightText")}
      </div>
    </footer>
  );
};

export default Footer;
