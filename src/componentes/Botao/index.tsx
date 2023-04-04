import { ReactElement } from 'react'
import './Botao.css'


interface BotaoProps { //a interface BotaoProps irá esperar uma propriedade chamada children:, que são os "filhos" do componente.
    children : ReactElement | string
}

const Botao = ({ children }: BotaoProps) => { //Aqui eu digo que as propriedades que ele irá receber são a de BotaoProps 
    return (<button className='botao'>
        {children}
    </button>)
}  // o children em Botao tem como objetivo fazer com que tudo que estiver dentro de <Botao> será passado pela propriedade children. isso la no index.js do form

export default Botao