import React from 'react'
import { Link } from 'react-router-dom'

import Caminhos from '../routes/Caminhos'

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
            <Link to="/caminhos" component={<Caminhos />}>Caminhos</Link>


        </>
    )
}

export default Home