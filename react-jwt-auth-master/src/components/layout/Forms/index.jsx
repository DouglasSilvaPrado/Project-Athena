import React from 'react'

export default function Forms() {
  return (
    <>
      <div className="imput col ">
        <h2>Apoie o projeto</h2>
        <form action="https://formsubmit.co/douglassilvadaprado@gmail.com" method="POST">
          <div className="form-group mx-auto">
            <input type="text" className="form-control my-3" placeholder="Digite seu nome" required />
            <input type="text" className="form-control my-3" placeholder="Digite seu Email" required />
            <textarea style={{ resize: 'none' }} placeholder="Digite sua Mensagem" rows={3} cols={50} name="message" required className="form-control my-3" defaultValue={""} />
            <input type="hidden" name="_ captcha" defaultValue="false" />
            <input type="hidden" name="_ autoresponse" defaultValue="Mensagem enviada!" />
            <input type="hidden" name="_ next" defaultValue="index.html" />
            <button className="btn btn-outline-success form-control my-3">Enviar</button>
          </div>
        </form>
      </div>
    </>
  )
}
