import './ListaSuspensa.css'

interface ListaSuspensaProps {
    aoAlterado: (valor: string) => void
    label: string
    obrigatorio: boolean
    valor: string
    itens: string [] //e uma lista de strings

}

const ListaSuspensa = ({aoAlterado,label,valor,obrigatorio,itens}: ListaSuspensaProps) => {

    return (<div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento => 
                    aoAlterado(evento.target.value)} 
                    required={obrigatorio} 
                    value={valor}
            >
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
    //O metodo .map funciona de que para cada item da lista ele vai retornar um array novo manipulado.
    //Para percorrermos aqui, teremos para cada item da lista, um item. Vamos passar uma arrow function porque para cada item queremos retornar uma <option>.
    //E dentro de <option>queremos imprimir o valor desse iten, Portanto, teremos uma lista de strings `{item}.
    //Cada item da nossa lista deveria ter uma chave única chamada key.
//O React precisa disso para controlar a renderização e saber quando ele precisa atualizar um item ou não. 

//O value do select vamos receber via props.valor e no onChange vamos chamar o props.aoAlterado.
}

export default ListaSuspensa