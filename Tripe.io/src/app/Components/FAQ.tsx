import React from 'react'

const FAQ = () => {
  return (
    <div className='mt-32 flex justify-center items-center flex-col m-20'>
        <h2 className='text-4xl font-bold mb-10'>Centro de ayuda</h2>
                <div className="collapse bg-base-200 m-2">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">¿Cómo puedo ponerme en contacto con ustedes?</div>
        <div className="collapse-content">
            <p>Puedes ponerte en contacto con nosotros a través de los siguientes métodos: <br />

                Correo electrónico: Envíanos un correo a soporte@tripea.com y te responderemos lo antes posible. <br />
                WhatsApp: Escríbenos al +507 6991-0433 para asistencia rápida y personalizada</p>
        </div>
        </div>
        <div className="collapse bg-base-200 m-2">
  <input type="checkbox" />
  <div className="collapse-title text-xl font-medium">¿Qué pasa si mi oferta ya venció?</div>
  <div className="collapse-content">
    <p>Si la oferta ha vencido, lamentablemente no podemos procesar una devolución.
    Se recomienda verificar las fechas de canje antes de la compra.</p>
  </div>
</div>
<div className="collapse bg-base-200 m-2">
  <input type="checkbox" />
  <div className="collapse-title text-xl font-medium">¿Cuáles son los horarios de atención?</div>
  <div className="collapse-content">
    <p>Nuestro equipo de atención al cliente está disponible para ayudarte en los siguientes horarios:

Lunes a Viernes:10:00 AM - 7:00 PM
Sábados: 9:00 AM - 8:00 PM
Domingos y festivos: 10:00 AM - 6:00 PM</p>
  </div>
</div>
    </div>
  )
}

export default FAQ