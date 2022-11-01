import React from 'react'

const Contact = () => {
  return (
    <>
    <div id='contact'>
        <h2 id='contacto'>Contacto</h2>
        <p id='pcontact'> Cualquier duda o propuesta, no dudes en contactarme!</p>
        <div id="formu">
          <form action="https://formspree.io/f/maykegaq" method='POST'>
            <label htmlFor="nombre">Nombre</label>
            <br />
            <input type="text" id='nombre' placeholder='Ingresa tu nombre...' required name='sender-nombre' />
            <br />
            <label htmlFor="mail">Mail</label>
            <br />
            <input type="mail" id='mail'placeholder='Ingresa tu email...' required name='sender-mail' />
            <br />
            <label htmlFor="mje">Mensaje</label>
            <br />
            <textarea name="mje" id="mje" placeholder='Escribe tu mensaje...' required cols="30" rows="10"></textarea>
            <br />
            <input type="submit" className="deploy" />

          </form>
        </div>
    </div>
    </>
  )
}

export default Contact