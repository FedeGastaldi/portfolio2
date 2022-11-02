import React from "react"

const Header = () => {
  return (
    <div className="header">
        <section>
          <h1
            className="flex justify-center items-center bg-cover text-7xl bg-clip-text bg-center uppercase text-transparent font-extrabold tracking-wide antialiased font-['DM Sans']"
            style={{
              backgroundImage:
                "url(https://64.media.tumblr.com/63d37176cd23f66d598348ad8a2ef72a/c96407d011e7a33c-4c/s500x750/1cf876bdf86435a961d4e3a3e81888c50f6f01b4.gifv)",
            }}
          >
            Federico Gastaldi
          </h1>
          <h3 id="front">Frontend Developer</h3>
          <a href="https://drive.google.com/file/d/1dkTm2vnxb0Xaaci85jawBu8k3TwToOcZ/view?usp=sharing" target="_blank" className="botoncv">Descargar CV</a>
        </section>
        
    </div>
  )
}

export default Header