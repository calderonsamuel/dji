import React, { Component } from 'react'
import './App.css';
import Accordion from './Accordion'
import DocumentViewer from './DocumentViewer';
import DocumentDownload from './DocumentDownload';


export class App extends Component {
  constructor(props: any) {
    super(props)
  
    this.state = {
       
    }
  }

  render() {
    return (
      <div className="">
        <div className="container-fluid p-2">
          <div className="row">
            <div className="col-md-4 col-sm-12 p-2">
              <Accordion />
            </div>
            <div className="col-md-8 col-sm-12 p-2">
              <DocumentViewer />
              <DocumentDownload />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
