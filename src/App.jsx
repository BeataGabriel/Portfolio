import { useState } from 'react'
import './App.css'
import Beznadejna from './assets/IMG_6813.jpeg'
import Vasniva from './assets/IMG_6812.jpeg'
import Vecerni from './assets/IMG_6811.jpeg'
import Gallery from './gallery'

const contentByLanguage = {
  English: {
    title: 'Welcome to My Art Jungle',
    textCountry: [
      'Here, you will find the colorful chaos of an amateur artist letting her imagination run wild.',
      'Enjoy the gallery of accidental masterpieces, where imperfection is my signature style.'
    ],
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/512px-Flag_of_Norway.svg.png',
    things: [
      {
        title: 'Večerní',
        image: Vecerni,
        width: 2714,
        height: 3471,
        description: [
          'Heat the olive oil in a large pan over medium heat. Add the onions and sauté until lightly golden, 2 to 3 minutes.',
          'Add the garlic and fry for another minute. Add the ground beef',
          'Fry until fully cooked and no pink shows at all in the meat. Then add the tomato paste and mix it with the meat. Add the oregano.',
          'Add the tomatoes, parsley, and season with salt and pepper.',
          'Simmer for 15 minutes. Serve with freshly cooked spaghetti.'
        ]
      },
      {
        title: 'Vášnivá',
        image: Vasniva,
        width: 2678,
        height: 3428,
        description: [
          'Heat olive oil in a saucepan and add the onion and sauté for a few minutes. Add the garlic and sauté for another minute.',
          'Add the tin of crushed tomatoes and bring to the boil. Add basil and let sauce thicken for a few minutes, season with salt and pepper.',
          'Cook San Remo Ready Pasta Spaghetti according to the packet directions.',
          'Add spaghetti to tomato sauce and stir to coat. Serve between two bowls and top with parmesan and some extra basil leaves.'
        ]
      },
      {
        title: 'Beznadějná',
        image: Beznadejna,
        width: 2807,
        height: 3547,
        description: [
          'Whisk eggs, parmesan cheese, & black pepper in a bowl & set aside.',
          'Cook pasta until it is ‘al dente’. Do not rinse the pasta, the starch helps the consistency of the sauce.',
          'Quickly add the egg mixture to the hot cooked pasta & toss to combine. The heat from the pasta will thicken the egg.',
          'Top with a sprinkle of parmesan cheese and a little chopped parsley for garnish!'
        ]
      }
    ]
  },
  Norwegian: {
    title: 'Velkommen til kunstjungelen min',
    textCountry: [
      'Her finner du det fargerike kaoset til en amatørkunstner som lar fantasien løpe løpsk.',
      'Nyt galleriet med tilfeldige mesterverk, der ufullkommenhet er min signaturstil.'
    ],
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png',
    things: [
      {
        title: 'Večerní',
        image: Vecerni,
        width: 2714,
        height: 3471,
        description: [
          'Varm olivenolje i en stor panne på middels varme. Tilsett løken og fres til den er lett gylden, 2 til 3 minutter.',
          'Tilsett hvitløken og stek i et minutt til. Tilsett kjøttdeig',
          'Stek til det er gjennomstekt og ingen rosa vises i kjøttet. Tilsett så tomatpureen og bland den med kjøttet. Tilsett oregano.',
          'Tilsett tomater, persille og smak til med salt og pepper.',
          'La det småkoke i 15 minutter. Server med nykokt spaghetti.'
        ]
      },
      {
        title: 'Vášnivá',
        image: Vasniva,
        width: 2678,
        height: 3428,
        description: [
          'Varm olivenolje i en kjele og tilsett løken og fres i noen minutter. Tilsett hvitløken og fres i et minutt til.',
          'Tilsett boksen med knuste tomater og kok opp. Tilsett basilikum og la sausen tykne i noen minutter, smak til med salt og pepper.',
          'Kok San Remo Ready Pasta Spaghetti i henhold til pakkens veibeskrivelse.',
          'Legg spaghetti til tomatsaus og rør for å belegge. Server mellom to boller og topp med parmesan og noen ekstra basilikumblader.'
        ]
      },
      {
        title: 'Beznadějná',
        image: Beznadejna,
        width: 2807,
        height: 3547,
        description: [
          'Pisk egg, parmesanost og sort pepper i en bolle og sett til side.',
          'Kok pasta til den er ‘al dente’. Ikke skyll pastaen, stivelsen hjelper konsistensen på sausen.',
          'Legg raskt eggeblandingen til den varme kokte pastaen og bland for å kombinere. Varmen fra pastaen vil gjøre egget tykkere.',
          'Topp med et dryss parmesanost og litt hakket persille til pynt!'
        ]
      }
    ]
  }
}

function App() {
  const [text, setText] = useState('Cheers!')
  const [customFontFamily, setCustomFontFamily] = useState('Courier New')
  const [image, setImage] = useState('https://place.dog/200/200')
  const [language, setLanguage] = useState(Object.keys(contentByLanguage)[0])
  const [count, setCount] = useState(0)
  const onFlagClick = () => {
    let newLanguage = 'Norwegian'
    if (language == 'Norwegian') {
      newLanguage = 'English'
    }
    setLanguage(newLanguage)
    setCount(count + 1)
  }
  const onImageClick = () => {
    setImage('https://place.dog/150/150')
  }
  const onClickHandler = () => {
    setText("Skål!")
    setCustomFontFamily("Courier New")

  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 onClick={onClickHandler}>{contentByLanguage[language].title} </h1>
      {contentByLanguage[language].textCountry.map((line) =>
        <div> {line} </div>
      )}<br />
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
