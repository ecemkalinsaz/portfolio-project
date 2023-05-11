import { useContext } from "react";
import { AppContext } from "../context";

export function Profile() {
  const { language } = useContext(AppContext);
  return (
    <div
      className={`flex p-0 text-left dark:bg-[rgb(23,16,67)] font-['Inter'] `}
      
    >
      <div className="px-20 w-full  flex flex-col gap-[33px] items-start py-[84px] bg-[rgba(71,49,211,1)] dark:bg-[rgb(23,16,67)]">
          <p className="text-5xl font-bold leading-none m-0 tracking-[0.01em] text-[rgba(203,242,129,1)]">
            {language === "en" ? "Profile" : "Profil"}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center gap-[30px]">
            <div className="gap-6 flex flex-col items-start self-stretch ">
                <p className="w-full text-3xl font-medium leading-7 text-white m-0">
                  {language === "en" ? "Personal Info" : "Kişisel Bilgiler"}
                </p>
                <div className="gap-2.5 flex items-start self-stretch ">
                  <p className="text-base font-semibold leading-normal m-0 tracking-[0.01em] text-[rgba(203,242,129,1)]">
                    {language === "en" ? "Birthday" : "Doğum Tarihi"}
                    <br />
                    <br />
                    {language === "en" ? "Location" : "Konum"} 
                    <br />
                    <br />
                    {language === "en" ? "Education" : "Eğitim"}
                    <br />
                    <br />
                    {language === "en" ? "Preffered Role" : "Tercih Ettiği Rol"}
                  </p>
                  <p className="text-base font-normal leading-normal text-white m-0 tracking-[0.01em]">
                    30.03.1997
                    <br />
                    <br />
                    Ankara
                    <br />
                    <br />
                    {language === "en" ? "BSc in Chemical Engineering, 2021" : "Gazi Ünv. Kimya Müh. 2021"} 
                    <br />
                    <br />
                    Frontend, Full-Stack
                  </p>
                </div>
            </div>
            {/* md:hidden mdnin ustundeki cozunurluktekiler icin gizler. lg:block ise lg ve uzerindeki cozunurlukler icin gorunur yapar. BU sayede sadece md'de gizlenmesini saglariz. mdnin altindakiler icin bir ayar yapmadigim icin her zaman gorunecek */}
            <div className="w-full h-[280px] md:hidden lg:block drop-shadow-lg rounded-[10px] [background:url(./assets/about.png)_center_/_cover]" />
            <div className="flex-1 gap-6 flex flex-col items-start flex-grow self-stretch">
              <p className="text-3xl font-medium text-white leading-none m-0">
                {language === "en" ? "About Me" : "Hakkımda"}
              </p>
              <p className="text-lg font-normal text-white leading-normal m-0">
                {language === "en" ? "Learning new technologies and working on projects excite me. The most important things for me are to love my job and realize my dreams. That's why I always keep myself open to development and renewal. When I participate in any project, I am happy to put all my skills and energy into it." : "Yeni teknolojiler öğrenmek ve projeler üzerinde çalışmak beni heyecanlandırıyor. Benim için en önemli şey işimi sevmek ve hayallerimi gerçekleştirmek. Bu yüzden kendimi gelişime ve yeniliğe her zaman açık tutuyorum. Herhangi bir projede yer aldığımda tüm yeteneklerimi ve enerjimi ortaya koymak beni mutlu ediyor."}
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}