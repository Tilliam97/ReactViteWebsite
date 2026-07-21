import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import gmailLogo from './assets/gmail.svg'
import substackLogo from './assets/substack.svg'
import instaLogo from './assets/instagram.svg'
import tiktokLogo from './assets/tiktok.svg'
import bioPic from './assets/Yvonne.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div id="title">
      <h1>all of me for You</h1>
    </div>
    <div id="body">
      <img src={bioPic} className="cyd" width="480" height="480" alt="" />
    </div>

    <div></div>
      {/* <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div> */}

      <section id="next-steps">
        {/* <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div> */}
        <div id="social">
          <div id="social-txt">
            <svg className="icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#social-icon"></use>
            </svg>
            <h2>Connect with me</h2>
            <p>Join the community</p>
          </div>
          <ul>
            <li>
              <a href="https://open.substack.com/pub/camilleyvonne22" target="_blank">
                <img
                  className="button-icon" src={substackLogo}
                  role="presentation"
                  aria-hidden="true"
                />
                Substack
              </a>
            </li>
            <li>
              <a href="mailto:camilledobbs03@gmail.com?subject=Get%20In%20Touch" target="_blank">
                <img 
                    className="button-icon" 
                    src={gmailLogo}
                    role="presentation"
                    aria-hidden="true"
                />
                Email Me
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/camille_yvonne22" target="_blank">
                <img
                  className="button-icon" src={instaLogo}
                  role="presentation"
                  aria-hidden="true"
                />
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@n0t_camille" target="_blank">
                <img
                  className="button-icon" src={tiktokLogo}
                  role="presentation"
                  aria-hidden="true"
                />
                Tiktok
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
