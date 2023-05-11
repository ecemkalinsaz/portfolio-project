import ButtonGithub from "../assets/ButtonGithub";
import ButtonLinkedin from "../assets/ButtonLinkedin";
import { useContext } from "react";
import { AppContext } from "../context";

export function Header() {
  const { darkModeHandler, theme, language, setLanguage, myData } =
    useContext(AppContext);

  function routeToGithub() {
    window.open("https://github.com/ecemkalinsaz");
  }

  function routeToLinkedin() {
    window.open("https://tr.linkedin.com/in/ecem-basmac%C4%B1-203174221");
  }

  function languageHandler() {
    setLanguage(language === "en" ? "tr" : "en");
  }

  const header = myData.header;

  return (
    <div
      className={`flex p-0 text-left font-['Inter'] `}
      
    >
      <div className="flex flex-col px-20 justify-center w-3/4  bg-[rgba(71,49,211,1)] dark:bg-[rgb(23,16,67)]">
        <div className="relative leading-none font-bold">
          <p
            className="inline m-0 absolute top-[-75px] right-0 text-[15px] leading-[normal] text-[rgba(202,241,129,1)] cursor-pointer"
            onClick={languageHandler}
          >
            {language === "en" ? "Switch to Turkish" : "İngilizce'ye geç"}
          </p>
        </div>
        <div className="flex items-center">
          <div className="">
            <p className=" font-bold m-0 pb-20 text-[32px] leading-[72px] text-[rgba(203,242,129,1)]">
              Ecem
            </p>
            <div className="gap-9 flex flex-col justify-center items-start self-stretch">
              <p className="w-full font-bold m-0 text-[54px] leading-[1.1] text-[rgba(203,242,129,1)]">
                {header.job[language]}
                <br />
                {header.developer[language]}...
              </p>
              <p className="text-2xl font-normal text-white m-0 leading-[normal]">
                {language === "en"
                  ? "...who likes to craft solid and scalable frontend products with great user experiences."
                  : "Kullanıcı deneyimleriyle birlikte sağlam ve ölçeklenebilir frontend ürünleri oluşturmayı seviyorum."}
              </p>
              <div className="gap-3 flex items-center text-indigo-800 font-medium w-[278px] h-[52px]">
                <button
                  onClick={routeToGithub}
                  className="py-3 pl-3 pr-5 bg-white gap-2.5 flex justify-center items-center rounded-md w-[127px] h-[52px] [box-shadow:0px_0px_0px_1px_rgba(55,_48,_163,_1)_inset] [box-shadow-width:1px]"
                >
                  <ButtonGithub className="w-[26px] h-[26px]" />
                  <p className="text-lg leading-7 m-0">Github</p>
                </button>
                <button
                  onClick={routeToLinkedin}
                  className="py-3 pl-3 pr-5 bg-white gap-2.5 flex justify-center items-center rounded-md w-[139px] h-[52px] [box-shadow:0px_0px_0px_1px_rgba(55,_48,_163,_1)_inset] [box-shadow-width:1px]"
                >
                  <ButtonLinkedin className="w-6 h-[25px]" />
                  <p className="text-lg leading-7 m-0">Linkedin</p>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute hidden lg:block left-1/2 translate-x-1/2 w-[350px] h-[376px] drop-shadow-lg rounded-[18px] [background:url(./assets/main.png)_center_/_cover]" />
        </div>
      </div>
      <div className="pt-8 w-[300px] right-0 top-0 flex items-start font-bold w-1/4 pb-[615px] pl-[18px] pr-[247px] bg-[rgba(203,242,129,1)] text-[rgba(71,49,211,1)] dark:bg-[rgba(26,33,11,1)]">
        <label className="relative  inline-flex items-center cursor-pointer z-10">
          <input
            type="checkbox"
            value={theme === "light"}
            onChange={darkModeHandler}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-[rgba(143,136,255,1)] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[rgba(58,58,58,1)] "></div>
        </label>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Dark Mode
        </span>
      </div>
    </div>
  );
}
