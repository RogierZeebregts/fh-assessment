import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Header from '../components/Base/Header'
import EventList from '../components/EventList/EventList'
import EventListFilter from '../components/EventList/EventListFilter'

import './App.scss'

const App = () => (
    <div className="App">
        <Header/>
        <div className="container">
            <Router>
                <Switch>
                    <Route path="/">
                        <EventListFilter/>
                        <EventList/>
                    </Route>
                </Switch>
            </Router>
        </div>
    </div>
)

export default App
