import useLocalStorage from './useLocalStorage'

export function useLanguage() {
  // language anahtar, en ise ilk deger
  // useLocalStorage'i ben tanimladim. Bu bir fonksiyon ve iki parametre bekliyor. Birincisi anahtar, ikincisi ilk deger.
  // useLocalStorage fonksiyonu bana iki deger donduruyor. Birincisi language, ikincisi setLanguage
  // en ilk degeri sadece kullanici ilk kez siteye geldiginde kullanilacak. 
  const [language, setLanguage] = useLocalStorage('language', 'en')

  return [language, setLanguage]
}
