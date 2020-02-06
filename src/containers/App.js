import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom'

import API from '../lib/api'
import { groupListByDate } from '../lib/helpers'
// import Events from '../assets/events.json'
import Header from '../components/Base/header'
import List from '../components/List/List'

import './App.scss'

class App extends Component {
    state = {
        list: [],
    }
    
    componentDidMount () {
        API.get(`/public/events`)
           .then(res => {
               const list = groupListByDate(res.data)
               this.setState({list})
           })
    }
    
    render () {
        const list = (
            <div className="list-container">
                <List data={this.state.list}/>
            </div>
        )
        
        return (
            <div className="App">
                <Header/>
                
                <div className="container">
                    <Router>
                        <Route path="/">
                            {list}
                        </Route>
                    </Router>
                </div>
            </div>
        )
    }
}

export default App
