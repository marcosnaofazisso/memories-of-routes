import React from 'react'
import { Link } from 'react-router-dom'

import Encruzilhada from '../routes/Encruzilhada'

function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link to="/clientes">Clientes</Link>
            <br />
            <Link to="/produtos">Produtos</Link>
            <br />
            <Link to="/estabelecimentos">Estabelecimentos</Link>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Link to="/encruzilhada" component={<Encruzilhada />}>Encruzilhada</Link>


        </>
    )
}

export default Home