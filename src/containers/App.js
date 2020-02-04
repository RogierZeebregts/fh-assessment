import React, { Component } from 'react'
import Header from '../components/Base/header'

import './App.module.scss'

class App extends Component {
    state = {
        list: [],
    }
    
    render () {
        return (
            <div className="App">
                <Header/>
            </div>
        )
    }
}

export default App
