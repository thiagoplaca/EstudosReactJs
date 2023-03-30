import React from 'react'
import produtos from '../../data/produtos';
import './TabelaProdutos.css'


export default (props) => {

    const tabProducts = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R${produto.valor}</td>
            </tr>
        )
    })

    return (
        <div className='Tabela-Produtos'>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {tabProducts}
                </tbody>


            </table>
        </div>


    )
}