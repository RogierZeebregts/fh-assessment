import React, { Component } from 'react'
import API from '../lib/api'
import Events from '../assets/events.json'
import Header from '../components/Base/header'
import List from '../components/List/List'

import './App.scss'

class App extends Component {
    state = {
        list: Events,
    }
    
    componentDidMount () {
        // API.get(`/public/events`)
        //    .then(res => {
        //        const list = res.data
        //        this.setState({list})
        //    })
    }
    
    render () {
        const list = <div className="list-container">
            <List data={this.state.list}/>
        </div>
        
        return (
            <div className="App">
                <Header/>
                
                <div className="container">
                    <div className="row">
                        <div className="col">{list}</div>
                        <div className="col">2</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
