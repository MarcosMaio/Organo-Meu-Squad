import { IJogador } from '../../shared/interface/IJogadores'
import Jogador from '../Jogadores'
import './Time.css'


interface TimeProps {
    corDeFundo: string
    corDoCard: string
    nome: string
    jogadores: IJogador[]
}

const Time = ({corDeFundo, corDoCard, nome, jogadores}:TimeProps) => {
    
    return (
        (jogadores.length > 0) ? //Se ? a condição > 0 for verdadeira, devolva a <section>, se não for verdade, devolva a string vazia ''.
        <section className='time' style={{backgroundColor: corDeFundo}}>
            <h3 style={{color: corDoCard}}>{nome}</h3>
            <div className='jogadores'>
                {jogadores.map(jogador => <Jogador 
                key={jogador.nome} 
                corDoCard={corDoCard} 
                nome={jogador.nome} 
                função={jogador.função} 
                imagem={jogador.imagem} 
                personagem={jogador.personagem} 
                avatar={jogador.avatar}
            />
                )}
                </div>
        </section>
        : <></>
    )
} //É assim que fazemos uma renderização condicional com o React. O JavaScript vai olhar para essa expressão e caso > 0 seja true, ele vai retornar o segundo parâmetro da condição. Se ele for falso, o React não vai fará nada.

export default Time