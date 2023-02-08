import React, { Component } from 'react'
import './Accordion.css'

export class Accordion extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           
        }
    }

    badge(className: string) {
      return(
        <span className={"badge px-2 me-2 " + className} style={{height: "0.8rem"}}> </span>
      )
    }
    
    textInput(inputId: string, label: string, placeholder: string = "", helpText: string = "") {
      const helpTextWrapper = helpText.length > 0 ? <small id={inputId + "helpId"} className="form-text text-muted">{helpText}</small>:""
      
      return(
        <div className="mb-3">
          <label htmlFor={inputId} className="form-label">
            {this.badge("vi-ciudad")}
            {label}
          </label>
          <input type="text"
            className="form-control" name={inputId} id={inputId} aria-describedby={inputId + "helpId"} placeholder={placeholder} />
          {helpTextWrapper}
        </div>
      )
    }
    
    numericInput(inputId: string, label: string, value: number = 0, helpText: string = "") {
      const helpTextWrapper = helpText.length > 0 ? <small id={inputId + "helpId"} className="form-text text-muted">{helpText}</small>:""
      return(
        <div className="mb-3">
          <label htmlFor={inputId} className="form-label">
            {label}
          </label>
          <input 
              type="number" 
              id={inputId} 
              className="form-control" 
              name={inputId} 
              aria-describedby={inputId+"helpId"} 
              placeholder = "0"
              min = {0}
              max ={99}
          />
          {helpTextWrapper}
        </div>
      )
    }

    selectInput() {
      return(
        <div className="mb-3">
          <label htmlFor="oportunidad" className="form-label">
            Oportunidad
          </label>
          <select className="form-select" name="" id="oportunidad" defaultValue="al inicio">
            <option value="" >al inicio</option>
            <option value="">periódica</option>
            <option value="">al cesar</option>
          </select>
        </div>
      )
    }

    render() {
        return (
        <div className="accordion" id="accordionInputs">
          
          {/* Welcome */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="welcome-heading">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#welcome-collapse" aria-expanded="true" aria-controls="welcome-collapse">
                <h2>Aplicativo</h2>
              </button>
            </h2>
            <div id="welcome-collapse" className="accordion-collapse collapse show" aria-labelledby="welcome-heading" data-bs-parent="#accordionInputs">
              <div className="accordion-body">
                This is the first item's accordion body.
              </div>
            </div>
          </div>
          
          {/* Inputs */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="inputs-heading">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#inputs-collapse" aria-expanded="false" aria-controls="inputs-collapse">
              <i className="bi bi-input-cursor-text me-2"></i>Inputs
              </button>
            </h2>
            <div id="inputs-collapse" className="accordion-collapse collapse" aria-labelledby="inputs-heading" data-bs-parent="#accordionInputs">
              <div className="accordion-body">
                {this.textInput("ciudad", "Ciudad de remisión")}
                {this.textInput("remitente", "Nombre de remitente")}
                {this.textInput("dni", "N° de DNI", "Ejemplo: 07654321")}
                {this.numericInput("folios", "N° de folios")}
                {this.selectInput()}
                {this.textInput("email", "Email")}
                {this.textInput("telefono", "N° de teléfono", "Ejemplo: 987654321")}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="info-heading">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#info-collapse" aria-expanded="false" aria-controls="info-collapse">
              <i className="bi bi-info-circle me-2"></i>Info
              </button>
            </h2>
            <div id="info-collapse" className="accordion-collapse collapse" aria-labelledby="info-heading" data-bs-parent="#accordionInputs">
              <div className="accordion-body">
                This is the first item's accordion body.
              </div>
            </div>
          </div>
          
        </div>
        )
    }
}

export default Accordion