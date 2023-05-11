import Codepen from "../assets/Codepen";
import AtSign from "../assets/AtSign";
import Instagram from "../assets/Instagram";

import { useContext } from "react";
import { AppContext } from "../context";

export function Footer() {
  const { language } = useContext(AppContext);
  return (
    <div
      className={`flex p-0 font-['Inter'] `}
      
    >
      <div className="pb-20 flex items-start w-full pt-[84px] justify-center px-8 bg-[rgba(249,249,249,1)] dark:bg-[rgb(37,33,40)]">
        <div className="gap-6 flex flex-col items-center">
          <p className="text-4xl font-bold text-center text-[rgba(71,49,211,1)] dark:text-[rgb(143,136,255)]">
            {language === 'en' ? 'Send me a message!' : 'İletişim'}
          </p>
          <p className="text-2xl font-normal leading-normal text-center m-0 text-[rgba(18,11,57,1)] dark:text-white">
            {language === 'en' ? 'Got a question or proposal, or just want' : 'Bir sorunuz mu var veya sadece merhaba'}
            <br />
            {language === 'en' ? 'to say hello? Feel free to reach out!' : 'mı demek istiyorsunuz? Bana ulaşmaktan çekinmeyin!'} 
          </p>
          <p className="text-xl font-medium tracking-wider text-left m-0 w-[269px] leading-[normal] text-[rgba(71,49,211,1)] dark:text-[rgb(143,136,255)]">
            ecemmkalinsaz@gmail.com
          </p>
          <div className="gap-6 flex justify-center w-[212px] h-[35px]">
            <Codepen className="w-[35px] h-[35px]" />
            <AtSign className="w-[35px] h-[35px]" />
            <Instagram className="w-[35px] h-[35px]" />
          </div>
        </div>
      </div>
    </div>
  );
}