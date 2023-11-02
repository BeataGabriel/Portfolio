import { useState } from 'react'
import './App.css'
import Beznadejna from './assets/IMG_6813.jpeg'
import Vasniva from './assets/IMG_6812.jpeg'
import Vecerni from './assets/IMG_6811.jpeg'
import Gallery from './gallery'

const contentByLanguage = {
  English: {
    title: 'Portfolio', textCountry: 'Welcome to my art playground! Here, you will find the colorful chaos of an amateur artist letting her imagination run wild.Enjoy the gallery of accidental masterpieces, where imperfection is my signature style.', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/512px-Flag_of_Norway.svg.png', things: [
      { title: 'Večerní', image: Vecerni, width: 2714, height: 3471 },
      { title: 'Vášnivá', image: Vasniva, width: 2678, height: 3428 },
      { title: 'Beznadějná', image: Beznadejna, width: 2807, height: 3547 }
    ]
  },
  Norwegian: {
    title: 'Portfolio', textCountry: 'Velkommen til kunstlekeplassen min! Her finner du det fargerike kaoset til en amatørkunstner som lar fantasien løpe løpsk. Nyt galleriet med tilfeldige mesterverk, der ufullkommenhet er min signaturstil.', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png', things: [
      { title: 'London', image: 'https://upload.wikimedia.org/wikipedia/commons/6/67/London_Skyline_%28125508655%29.jpeg', link: 'https://en.wikipedia.org/wiki/London' }, { title: 'Stonehenge', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stonehenge2007_07_30.jpg/1920px-Stonehenge2007_07_30.jpg', link: 'https://en.wikipedia.org/wiki/Stonehenge' }, { title: 'Buckingham Palace', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Buckingham_Palace_aerial_view_2016_%28cropped%29.jpg/1920px-Buckingham_Palace_aerial_view_2016_%28cropped%29.jpg', link: 'https://en.wikipedia.org/wiki/Buckingham_Palace' }
    ]
  }
}

function App() {
  const [text, setText] = useState('vino de la casa')
  const [customFontFamily, setCustomFontFamily] = useState('Arial')
  const [image, setImage] = useState('https://placekitten.com/200/200')
  const [language, setLanguage] = useState('Spanish')
  const [count, setCount] = useState(0)
  const onFlagClick = () => {
    let newLanguage = 'English'
    if (language == 'English') {
      newLanguage = 'Spanish'
    }
    setLanguage(newLanguage)
    setCount(count + 1)
  }
  const onImageClick = () => {
    setImage('https://placekitten.com/150/150')
  }
  const onClickHandler = () => {
    setText("¿Hola, cómo estás?")
    setCustomFontFamily("Montserrat")

  }
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <h1 onClick={onClickHandler}>{contentByLanguage[language].title}</h1>
      {contentByLanguage[language].textCountry}<br />Espero que te diviertas.
      <div style={{ fontFamily: customFontFamily }}>
        {text}
      </div>
      <div style={{ display: 'grid', placeContent: 'center' }}>
        <div
          className='thingBox'>
          <Gallery galleryID='paintings' images={contentByLanguage[language].things} />
        </div>
        <img className='logo fancy' onClick={onFlagClick} src={contentByLanguage[language].flag} />
        <img className='logo fancy' onClick={onImageClick} src={image} />
        <div style={{ fontFamily: customFontFamily }}>
          I have clicked {count} times on the flag today.
        </div>
      </div>
    </div>)
}

export default App
