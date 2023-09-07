import { useState } from 'react'
import './App.css'
const contentByLanguage = {
  Spanish: {
    title: 'España', textCountry: 'España es un país hermoso que tiene mucho que ofrecer. Esta página estará especialmente dedicada a Lluís, uno de los mejores escaladores españoles!', flag: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg'
  },
  English: {
    title: 'Spain', textCountry: 'Spain is a beautiful country that has a lot to offer. This page is for Lluís, one of the best Spanish climbers.', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png'
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
        <img className='logo fancy' onClick={onFlagClick} src={contentByLanguage[language].flag} />
        <img className='logo fancy' onClick={onImageClick} src={image} />
        <div style={{ fontFamily: customFontFamily }}>
          I have clicked {count} times on the flag today.
        </div>
      </div>
    </div>)
}

export default App
