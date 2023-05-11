import { useContext } from "react";
import { AppContext } from "../context";
export function ProjectItem(props) {
    const { project } = props;

    const { language } = useContext(AppContext)

    function openSite() {
        // _blank yeni sekmede acmayi sagliyor.
        window.open(project.link, "_blank");
    }

    function openGithub() {
        window.open(project.github, "_blank");
    }

    const image = project.image

    return (
        <div className="bg-white gap-4 flex justify-center w-full flex-col lg:flex-row items-center rounded-xl drop-shadow-lg  dark:bg-[rgb(43,39,39)]">
          {/* Once --image-url isminde bir css degiskeni tanimladim. Sonra css'in var (variable'in kisatlmasi) ozelligiyle tanimladigim degiskene eristim */}
            <div style={{'--image-url': `url(${image})`}}  className="lg:rounded-l-xl w-[360px] h-[360px] [background:var(--image-url)_no-repeat_center_/_cover] " />
            <div className="p-8 flex-1 gap-6 flex flex-col items-start flex-grow">
              <p className="w-full font-bold leading-none text-indigo-700 m-0 text-[32px] dark:text-[rgb(193,186,237)]">
                {project.title[language]}
              </p>
              <p className="w-full text-base font-normal leading-tight m-0 text-[rgba(56,56,56,1)] dark:text-[rgb(210,210,210)]">
                {project.description[language]}
              </p>
              <div className="gap-1.5 flex w-full items-start text-white font-medium flex-col md:flex-row">
                {project.tags.map((tag, index) => (
                    // Neden key veriyoruz? https://tr.reactjs.org/docs/lists-and-keys.html
                    // React DOM'da guncellenen yerleri bilmek istiyor. Bu yuzden her bir elemana bir essiz bir key veriyoruz.
                    // Bu sayede React DOM guncellenen yerleri bulabiliyor ve sadece guncellenen yerleri guncelliyor.
                    <div key={`tag-${index}`} className="pt-2 gap-2.5 flex items-start pl-[18px] pr-[18px] pb-[9px] bg-[rgba(71,49,211,1)] h-[31px] md:w-auto w-full rounded-[23px] dark:bg-[rgb(129,115,218)]">
                        <p className="text-sm tracking-tighter leading-none m-0">
                            {tag}
                        </p>
                    </div>
                ))}
              </div>
              <div className="flex-1 h-3 flex p-0 font-medium w-[181px] text-[rgba(18,11,57,1)] dark:text-[rgb(203,242,129)]">
                <div className="h-3 flex items-center p-0 w-[181px] gap-[14.74px]">
                  <p className="w-24 text-base leading-4 m-0 h-[12.3px] cursor-pointer" onClick={openSite}>
                    {language === "en" ? "View Site" : "Siteyi Gör"}
                  </p>
                  <p className="text-base leading-4 m-0 h-[12.27px] w-[70px] cursor-pointer" onClick={openGithub}>
                    Github
                  </p>
                </div>
              </div>
            </div>
          </div>
    )
}