import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Home from '../components/Home'
import Clientes from '../components/Clientes'
import Estabelecimentos from '../components/Estabelecimentos'
import Produtos from '../components/Produtos'

function AppRoutes() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/clientes" component={Clientes} />
                <Route path="/estabelecimentos" component={Estabelecimentos} />
                <Route path="/produtos" component={Produtos} />
            </Switch>
        </>
    )
}

export default AppRoutes