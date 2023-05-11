import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  // React statei tanimladik.
  const [storedValue, setStoredValue] = useState(() => {
    // Once localStorage'dan key'i al, eger varsa item'i al, yoksa initialValue'i al
    // key degeri language'e esit. Browser'da language isminde bir anahtar kayitli mi diye kontrol ediyoruz.
    // Eger bu anahtar kayitli ise, kayitli oldugu degeri geri dondurucez ve dil olarak bu kayitli degeri kullanacagiz.
    // Eger kayitli degilse, o zaman varsayilan olarak ingilizce dilini kullanacagiz.
    // Kullanici dili degistirmeye karar verirse, secimini browser'a kaydedecegiz.
    const item = window.localStorage.getItem(key)
    // item varsa item'i dondur, yoksa initialValue'i dondur
    if (item) { 
      return item
    } else {
      return initialValue
    }
  })
  const setValue = (value) => {
    setStoredValue(value)
    // kullanicinin dil secimini language anahtari ile browser'a kaydediyoruz.
    // Browserda Inspect -> Application -> soldan Local Storage altindan kayitli seyi gorebiliriz.
    window.localStorage.setItem(key, value)
  }
  return [storedValue, setValue]
}

export default useLocalStorage