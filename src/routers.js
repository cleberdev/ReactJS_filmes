import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './components/Header'
import Erro from './Pages/Erro'
import Filme from './Pages/Filme'

const Routes = () =>{
    return(
        <BrowserRouter>
        <Header></Header>
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route exact path="/filme/:id" component={ Filme } />
                <Route path="*" component={ Erro }/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes