import React from 'react'

import Clientes from '../components/Clientes'
import Estabelecimentos from '../components/Estabelecimentos'
import Produtos from '../components/Produtos'

const caminhos = {
    'clientes': <Clientes />,
    'estabelecimentos': <Estabelecimentos />,
    'produtos': <Produtos />,
}

function Encruzilhada(props) {
    return (
        <>
            <h1>Encruzilhada</h1>
            {props && <p>{JSON.stringify(props)}</p>}
        </>
    )
}

export default Encruzilhada