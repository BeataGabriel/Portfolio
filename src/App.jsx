import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const contentByLanguage = {
  Spanish: {
    title: 'España', textCountry: 'España es un país hermoso que tiene mucho que ofrecer. Esta página estará especialmente dedicada a Lluís, uno de los mejores escaladores españoles!', flag: 'https://placekitten.com/100/100'
  },
  English: {
    title: 'Spain', textCountry: 'Spain is a beautiful country that has a lot to offer. This page is for Lluís, one of the best Spanish climbers.', flag: 'https://placekitten.com/80/80'
  }
}

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('vino de la casa')
  const [fontFamily, setFontFamily] = useState('Arial')
  const [image, setImage] = useState('https://placekitten.com/200/200')
  const [language, setLanguage] = useState('Spanish')
  const onImageClick = () => {
    setImage('https://placekitten.com/150/150')
  }
  const onClickHandler = () => {
    setText("¿Hola, cómo estás?")
    setFontFamily("Montserrat")
    let newLanguage = 'English'
    if (language == 'English') {
      newLanguage = 'Spanish'
    }

    setLanguage(newLanguage)
  }
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <h2 onClick={onClickHandler}>{contentByLanguage[language].title}</h2>
      {contentByLanguage[language].textCountry}<br />Espero que te diviertas.
      <div style={{ fontFamily }}>
        {text}
      </div>
      <div style={{ display: 'grid', placeContent: 'center' }}>
        <img className='logo fancy' onClick={onImageClick} src={image} />
      </div>
    </div>
  );
}

export default App
