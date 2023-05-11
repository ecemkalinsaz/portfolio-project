import React, { useEffect, useState } from "react";
import { AppContext } from "./context";
import axios from "axios";

import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

import { useLanguage } from "./hooks/useLanguage.js";
import { data } from "./data";

import "./App.css";

export default function App() {
  // Thema state'inin ilk degeri, eger kullanicinin browserinda hangi temayi sectigi bilgisi varsa odur.
  // Eger yoksa, varsayilan olarak light tema secili olacak.
  // Eger kullanci ilk defa siteye giriyorsa otomatik olarak light mod secili olacak.
  const [theme, setTheme] = useState(
    !localStorage.mode ? "light" : localStorage.mode
  );
  // useLanguage hook ben tanimladigim icin ilk deger vermeme gerek yok. Zaten fonksiyonun icinde ilk degeri verdim.
  const [language, setLanguage] = useLanguage();

  const [myData, setMyData] = useState(data);

  const darkModeHandler = () => {
    // Bu fonksiyon sag ustteki dark mode butonuna tiklandiginda calisacak.
    // o anki temanin zittini aliyoruz. Eger dark ise light, light ise dark.
    setTheme((initialtheme) => (initialtheme === "dark" ? "light" : "dark"));
    if (theme === "dark") {
      // Eger tema dark ise, lighte gecmek icin html taginin classindaki dark sinifini siliyorum.
      document.documentElement.classList.remove("dark");
      // kullanicin browserina thema tercihini kaydediyorum.
      localStorage.setItem("mode", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
    }
  };

  // useEffect sayfaya girdigimde her zaman bir kere calicacak.
  useEffect(() => {
    // browsera kaydedilen thema tercihini okuyorum.
    if (
      localStorage.mode === "dark"
    ) {
      // Kullancii dark mode secmis. O yuzden html elementine dark classini ekliyorum.
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Kullanici siteye girdigi zaman dil verileriini api'dan cekiyorum.
    // Dil verileri benim backendimde kayitliymis gibi simule ediyorum.
    axios
      .post("https://reqres.in/api/data", data)
      .then((res) => {
        setMyData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{ theme, darkModeHandler, language, setLanguage, myData }}
    >
      <div className="App">
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}
