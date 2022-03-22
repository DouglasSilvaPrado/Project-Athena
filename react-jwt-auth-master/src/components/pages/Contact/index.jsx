import React from 'react'



function index() {

    return (
        <>
            <div className="container bg-contato  my-5" id="contato">
                <h2 className="text-white display-6 text-center fw-bold my-5">
                    Entre em contato
                </h2>
                <div>
                    <form action="https://formsubmit.co/douglassilvadaprado@gmail.com" method="POST">
                        <div className="form-group w-75 mx-auto">
                            <input type="text" className="form-control my-3" placeholder="Digite seu nome" required />
                            <input type="text" className="form-control my-3" placeholder="Digite seu Email" required />
                            <textarea style={{ resize: 'none' }} placeholder="Digite sua Mensagem" rows={15} cols={50} name="message" required className="form-control my-3" defaultValue={""} />
                            <input type="hidden" name="_ captcha" defaultValue="false" />
                            <input type="hidden" name="_ autoresponse" defaultValue="Mensagem enviada!" />
                            <input type="hidden" name="_ next" defaultValue="index.html" />
                            <div className=" d-flex justify-content-end">
                                <button className="btn btn-outline-success form-control w-25 my-3 ">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default index;