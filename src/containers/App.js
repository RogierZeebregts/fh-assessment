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
    }
    
    componentDidMount () {
        API.get(`/public/events`)
           .then(res => {
               const list = groupListByDate(res.data)
               this.setState({
                   list,
                   filteredList: list,
                   activeDetails: list[0]
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
                                <Details data={this.state.activeDetails}/>
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

// https://reacttraining.com/react-router/web/example/url-params
// https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf

// https://github.com/rajatgeekyants/superhero DATAPROVIDER
// https://www.taniarascia.com/using-context-api-in-react/
