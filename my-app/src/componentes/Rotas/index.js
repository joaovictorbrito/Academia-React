import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PaginaInicial from '../PaginaInicial'
import Agendamento from '../Agendamento'


const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={PaginaInicial} />
            <Route path='agendamento' component={Agendamento} />
        </Switch>
    </BrowserRouter>
)
export default Rotas;