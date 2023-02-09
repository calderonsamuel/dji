import React, { Component } from 'react'
import { Document, Packer, Paragraph, TextRun, AlignmentType } from "docx";
import { saveAs } from "file-saver";

export class DocumentDownload extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           
        }

        this.renderDocx = this.renderDocx.bind(this)
    }

    // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
    // This simple example will only contain one section

    doc = new Document({
        sections: [
            {
                properties: {},
                children: [
                    new Paragraph({
                        text: "Lima, 6 de febrero de 2023",
                        alignment: AlignmentType.RIGHT,
                    }),
                    new Paragraph({
                    text: "CARTA N° 01-JP",
                    alignment: AlignmentType.LEFT
                    }),
                    new Paragraph({
                    text: "Señor",
                    alignment: AlignmentType.LEFT
                    }),
                    new Paragraph({
                    children: [
                        new TextRun({
                        text: "Subgerente de Gestión de Declaraciones Juradas",
                        bold: true
                        })
                    ],
                    alignment: AlignmentType.LEFT
                    }),
                    new Paragraph({
                    text: "Contraloría General de la República Jr. Camilo Carrillo 114",
                    alignment: AlignmentType.LEFT
                    }),
                    new Paragraph({
                    children: [
                        new TextRun({
                        text: "Jesús María /Lima /Lima",
                        bold: true
                        })
                    ],
                    alignment: AlignmentType.LEFT
                    }),
                    new Paragraph({
                    text: "Yo, Juan Perez, identificado con DNI fdsa, me dirijo a usted, en el marco de la normativa de la referencia, a fin de efectuar la remisión en original, en 1 folios, y en sobre cerrado adjunto al presente, de mi DJI correspondiente al ejercicio presupuestal 2023 y de oportunidad de presentación al inicio .",
                    alignment: AlignmentType.JUSTIFIED
                    }),
                    new Paragraph({
                    text: "Cualquier coordinación al respecto, sírvase comunicarse al correo electrónico fds o al teléfono sfd.",
                    alignment: AlignmentType.JUSTIFIED
                    }),
                    new Paragraph({
                    text: "Atentamente,",
                    alignment: AlignmentType.LEFT
                    }),
                    new Paragraph({
                    text: "________________",
                    alignment: AlignmentType.CENTER
                    }),
                    new Paragraph({
                    text: "Juan Perez",
                    alignment: AlignmentType.CENTER
                    }),
                ],
            },
        ],
    });
  
  
    renderDocx() {
      // Used to export the file into a .docx file
      Packer.toBlob(this.doc).then((blob) => {
        // saveAs from FileSaver will download the file
        saveAs(blob, "example.docx");
    });
    
    }

    render() {
        return (
            <input 
                name="" 
                id="" 
                className="btn btn-primary my-2" 
                type="button" value="Button" 
                onClick={this.renderDocx}
            />
        )
    }
}

export default DocumentDownload