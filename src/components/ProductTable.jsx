import classes from './ProductTable.module.css'

export default function ProductTable({products, deleteProduct, editProduct}) {

    const currencyFormatter = (value) => {
        return parseFloat(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    const numberFormatter = (value) => {   
        return parseFloat(value).toFixed(2).replace('.',',');
    }

    return (
        <div className={classes.table_container}>
            <h2>Lista de Produtos</h2>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>Cod.</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Estoque (kg)</th>
                        <th style={{textAlign: 'center'}}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((prod) => (
                        <tr key={prod.id}>
                            <td>{prod.id}</td>
                            <td>{prod.name}</td>
                            <td>{currencyFormatter(prod.price)}</td>            
                            <td>{numberFormatter(prod.stock)}</td>
                            <td className={classes.actions}>
                            <button onClick={() => editProduct(prod.id)}>Editar</button>
                            <button onClick={() => deleteProduct(prod.id)}>Excluir</button>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}