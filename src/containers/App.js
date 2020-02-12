import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

import API from '../lib/api'
import { groupListByDate } from '../components/List/helpers'
import Header from '../components/Base/Header'
import List from '../components/List/List'
import Details from '../components/Details/Details'

import './App.scss'

class App extends Component {
    state = {
        list: [],
        filteredList: [],
        activeDetails: {},
        chunkIndex: 0,
    }
    
    componentDidMount () {
        API.get(`/public/events`)
           .then(res => {
               const list = groupListByDate(res.data)
               this.setState({
                   list,
                   filteredList: list,
                   activeDetails: {},
               })
           })
    }
    
    render () {
        return (
            <div className="App">
                <Header/>
                <div className="container">
                    <Router>
                        <Switch>
                            <Route path="/:id/:slug">
                                <Details
                                    list={this.state.list}
                                    data={this.state.activeDetails}
                                />
                            </Route>
                            
                            <Route path="/">
                                <List
                                    list={this.state.list}
                                    filteredList={this.state.filteredList}
                                    this={this}
                                />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }
}

export default App
