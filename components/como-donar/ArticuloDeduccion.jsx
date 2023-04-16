import React from 'react'
import imgNomina from '../../assets/como-donar/deduccionnominaempleados.png';
import Image from 'next/image';

export default function ArticuloDeduccion() {
    return (
        <article id="article6">
            <figure class="float-left">
                <Image
					src={imgNomina}
					alt="Nomina"
                    className="float-left"
					quality={100}
				/>
            </figure>
            <h2>Deducción de nómina para empleados</h2>
            <p>Si eres profesor o empleado de la Universidad, puedes realizar tu donación ingr​esando a este link y diligenciando el formulario.
                Si deseas hacerlo físico,​ ​descarga el formato de deducción de nómina​ y envíalo firmado, como documento adjunto, a los correos mavelasquc@eafit.edu.co​​ y ​​cfilant​ropia@eafit.edu.co.​​</p>
        </article>
    )
}
