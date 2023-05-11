import { useContext } from "react";
import { AppContext } from "../context";

export function Skills() {
  const { language } = useContext(AppContext);
  return (
    <div className="dark:bg-[rgb(43,39,39)]">
    <div
      className={`inline-flex justify-between md:flex-row flex-col items-start text-left w-full px-20 gap-[35px] font-['Inter'] my-[84px] `}
      
    >
      <p className="text-5xl font-bold m-0 tracking-[0.01em] leading-[normal] text-[rgba(72,50,211,1)] dark:text-[rgb(203,242,129)]">
        {language === 'en' ? 'Skills' : 'Yetenekler'}
      </p>
      <div className="ml-0 flex flex-col items-start font-medium gap-[35px] h-[430px] text-[rgba(119,119,119,1)] dark:text-white">
        <div className="gap-6 flex justify-center items-center h-[120px]">
          <div className="rounded-md w-[120px] h-[120px] drop-shadow-lg [background:url(./assets/js-icon.webp)_center_/_cover]" />
          <p className="text-2xl leading-normal uppercase m-0">JavaScript</p>
        </div>
        <div className="gap-6 flex justify-center items-center h-[120px]">
          <div className="rounded-md w-[120px] h-[120px] drop-shadow-lg [background:url(./assets/react-icon.webp)_center_/_cover]" />
          <p className="text-2xl leading-normal uppercase m-0">REACT</p>
        </div>
        <div className="gap-6 flex justify-center items-center h-[120px]">
          <div className="flex p-0 w-[120px] h-[120px] drop-shadow-lg">
            <div className="flex items-start rounded-md w-[120px] h-[120px] pt-[17px] pb-[17.1500244140625px] pl-[17px] pr-[18px] bg-white">
              <div className="w-[85px] h-[86px] [background:url(./assets/redux-icon.webp)_no-repeat_center_/_contain]" />
            </div>
          </div>
          <p className="text-2xl leading-normal uppercase m-0">REDUX</p>
        </div>
      </div>
      <div className="ml-0 flex flex-col items-start font-medium gap-[35px] h-[430px] text-[rgba(119,119,119,1)] dark:text-white">
        <div className="gap-6 flex justify-center items-center w-[213px] h-[120px]">
          <div className="rounded-md w-[120px] h-[120px] drop-shadow-lg [background:url(./assets/node-icon.webp)_center_/_cover]" />
          <p className="text-2xl leading-normal uppercase m-0">NODE</p>
        </div>
        <div className="gap-6 flex justify-center items-center w-[251px] h-[120px]">
          <div className="flex p-0 w-[120px] h-[120px] drop-shadow-lg">
            <div className="flex items-start rounded-md w-[120px] h-[120px] pt-[17px] pb-[17.1500244140625px] pl-[17px] pr-[18px] bg-[rgba(3,143,214,1)]">
              <div className="w-[85px] h-[86px] [background:url(./assets/vscode-icon.webp)_center_/_cover]" />
            </div>
          </div>
          <p className="text-2xl leading-normal uppercase m-0">VS CODE</p>
        </div>
        <div className="gap-6 flex justify-center items-center w-[221px] h-[120px]">
          <div className="rounded-md w-[120px] h-[120px] drop-shadow-lg [background:url(./assets/figma-icon.webp)_center_/_cover]" />
          <p className="text-2xl leading-normal uppercase m-0">FIGMA</p>
        </div>
      </div>
    </div>
    </div>
  );
}
