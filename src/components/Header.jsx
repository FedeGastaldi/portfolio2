import React from "react"

const Header = () => {
  return (
    <div className="header">
        <section>
          <h1
            className="flex justify-center items-center bg-cover text-7xl bg-clip-text bg-center uppercase text-transparent font-extrabold tracking-wide antialiased font-['DM Sans']"
            style={{
              backgroundImage:
                "url(src/img/asd.webp)",
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