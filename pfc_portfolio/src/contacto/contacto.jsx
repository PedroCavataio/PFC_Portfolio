import React from "react";
import { useNavigate } from "react-router-dom";
import "./contacto.styles.css";


    const Contacto = () => {
        const navigate = useNavigate();
      
        const handleSubmit = async (event) => {
          event.preventDefault();
          const form = new FormData(event.target);
          const response = await fetch(event.target.action, {
            method: event.target.method,
            body: form,
            headers: {
              'Accept': 'application/json'
            }
          });
          if (response.ok) {
            event.target.reset();
            alert('Mensaje enviado!!');
          }
        };


return (
    
    
    <div className="container p-4">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-8 col-lg-16">
          <div className="card" style={{ borderRadius: '8px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)' }}>
            <div className="card-header text-center">
              <h1 style={{ fontSize: '28px', color: '#444' }}>¡Envíeme un mensaje!</h1>
              <h2 style={{ fontSize: '18px', color: '#444' }}>¿Tienes alguna pregunta o propuesta, o simplemente quieres saludar? Adelante.</h2>
            </div>
            <div className="card-body">
              <form action="https://formspree.io/f/xoqovoyp" method="POST" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Tu nombre"
                    className="form-control"
                    style={{ height: '50px', fontSize: '22px', borderRadius: '6px' }} 
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    name="email"
                    placeholder="Direccion de Email al que quieras que te contacten"
                    className="form-control"
                    style={{ height: '50px', fontSize: '22px', borderRadius: '6px' }} 
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Tu teléfono"
                    className="form-control"
                    style={{ height: '50px', fontSize: '22px', borderRadius: '6px' }} 
                  />
                </div>
                <div className="mb-4">
                  <textarea className="form-control" name="Mensage" rows="16" placeholder="Mensaje" style={{ height: '200px', fontSize: '22px', borderRadius: '6px' }}></textarea>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary w-80" style={{ height: '50px', fontSize: '26px', borderRadius: '16px', }}>Enviar</button>                  
                </div>
               
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
)


};

export default Contacto;