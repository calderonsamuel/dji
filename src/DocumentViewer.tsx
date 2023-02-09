import React, { Component } from 'react'
import './DocumentViewer.css'

export class DocumentViewer extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            
        }
    }

    render() {
        const today = new Date()
        return (
            <div id='letterWrapper' className='p-4' style={{backgroundColor: "white"}}>
                <div className='float-end'>
                    <p>
                        <code id='loc-ciudad' className='vi-ciudad'>Lima</code>
                        {", " + today.toLocaleDateString("es-PE", {day: 'numeric', month: 'long', year: 'numeric'})}
                    </p>
                </div>
                <div className='my-3'>
                    <p>
                        CARTA N° 01-
                        <code className='vi-remitente'>SC</code>
                    </p>
                </div>
                <div>
                    <p className='mb-0'>Señor</p>
                    <strong className='mb-0'>Subgerente de Gestión de Declaraciones Juradas</strong>
                    <p className='mb-0'>Contraloría General de la República</p>
                    <p className='mb-0'>Jr. Camilo Carrillo 114</p>
                    <strong className='mb-0'>Jesús María /Lima /Lima</strong>
                </div>
                <div>
                    <table className='table table-borderless'>
                        <tbody>
                            <tr className=''>
                                <td>Asunto</td>
                                <td>:</td>
                                <td>Remisión de Declaración Jurada de Intereses – DJI</td>
                            </tr>
                            <tr className=''>
                                <td className='align-text-top'>Referencia</td>
                                <td className='align-text-top'>:</td>
                                <td className='align-text-top'>
                                    Cuarta Disposición Complementaria Transitoria del Reglamento que implementa la Ley N° 31227, respecto a la recepción, 
                                    el ejercicio del control, fiscalización y sanción de la Declaración Jurada de Intereses de autoridades, funcionarios y 
                                    servidores públicos del Estado, y candidatos a cargos públicos.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='letterBody'>
                    <p>
                        Yo, 
                        <code className='vi-remitente'>remitente</code>
                        , identificado con DNI 
                        <code className='vi-dni'>12345678</code>
                        , me dirijo a usted, en el marco de la normativa de la referencia, 
                        a fin de efectuar la remisión en original, en 
                        <code className='vi-folios'>X</code>
                        folios, y en sobre cerrado adjunto al presente,
                        de mi DJI correspondiente al ejercicio presupuestal 
                        {today.toLocaleDateString(undefined, {year: 'numeric'})}
                        y de oportunidad de presentación 
                        <code className='vi-oportunidad'>al inicio</code>
                        .
                    </p>
                </div>
                <div className='mt-2 letterBody'>
                    <p>
                        Cualquier coordinación al respecto, sírvase comunicarse al correo electrónico 
                        <code className='vi-email'>ejemplo@ejemplo.com</code>
                         o al teléfono 
                        <code className='vi-telefono'>987654321</code>
                        .
                    </p>
                </div>
                <div className ="mt-2 mb-5">
                    <p>Atentamente</p>
                </div>
                <div className='mb-3 text-center'>
                    <p>______</p>
                    <code className='vi-remitente'>Juan Perez</code>
                </div>
            </div>
        )
    }
}

export default DocumentViewer