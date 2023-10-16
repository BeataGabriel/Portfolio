import { useState } from 'react'
import './App.css'
const contentByLanguage = {
  Spanish: {
    title: 'Portfolio', textCountry: 'España es un país hermoso que tiene mucho que ofrecer. Esta página estará especialmente dedicada a Lluís, uno de los mejores escaladores españoles!', flag: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg', things: [
      { title: 'Beznadějná', image: 'https://i.imgur.com/Vtfra5V.jpeg', link: 'https://i.imgur.com/Vtfra5V.jpeg' }, { title: 'Vášnivá', image: 'https://i.imgur.com/SQDDNRz.jpeg', link: 'https://i.imgur.com/SQDDNRz.jpeg' }, { title: 'Adina', image: 'https://i.imgur.com/6uB7lVV.jpeg', link: 'https://i.imgur.com/6uB7lVV.jpeg' }
    ]
  },
  English: {
    title: 'Portfolio', textCountry: 'Spain is a beautiful country that has a lot to offer. This page is for Lluís, one of the best Spanish climbers.', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png', things: [
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

          {contentByLanguage[language].things.map((beer) =>
            <a className='thing' href={beer.link} target='_blank'>
              <img src={beer.image} style={{ width: 300 }} />
              <h5>{beer.title}</h5>
            </a>
          )}
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
