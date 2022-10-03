import React from 'react'
import { Link } from 'react-router-dom'

import Clientes from '../components/Clientes'
import Estabelecimentos from '../components/Estabelecimentos'
import Produtos from '../components/Produtos'

const caminhos = {
    'clientes': <Clientes />,
    'estabelecimentos': <Estabelecimentos />,
    'produtos': <Produtos />,
}

function Caminhos(props) {
    return (
        <>
            <h1>Caminhos</h1>
            {/* {props && <p>{JSON.stringify(props)}</p>} */}
            <br />
            <br />
            <br />
            <Link to="/">voltar</Link>

        </>
    )
}

export default Caminhos