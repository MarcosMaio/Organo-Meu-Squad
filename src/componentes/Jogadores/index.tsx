import './Jogador.css'

interface JogadorProps {
    nome: string
    imagem: string
    função: string
    personagem: string
    avatar: string
    corDoCard: string
}

const Jogador = ({nome, imagem, função, personagem, avatar, corDoCard}: JogadorProps) => {
    return (
    <div className='Jogador'>
        <div className='cabecalho' style={{backgroundColor: corDoCard}}>
            <img className='icone__jogador' src={imagem} alt={nome}></img>
        </div>
        
        <div className='rodape'>
            <h4 style={{color: corDoCard}}>{nome}</h4>
            <h5>{função}</h5>
        </div>
    
        <div className='rodape' id='card'>
            <img className='imagem__avatar' src={avatar} alt={avatar}></img>
        </div>

        <div style={{backgroundColor: corDoCard}} className='Card__Avatar' id='personagem'>
            <h4>{personagem}</h4>
        </div>

    </div>)
//O JavaScript tem um operador de desestruturação, então é possível desestruturar um objeto. Essa operação se assemelha ao que fazemos com o useState em que separamos no retorno. Então é comum em vez de props vermos um objeto desestruturando como esse
//Sobre <div className='deletar' onClick={aoDeletar}>deletar</div> , sempre que alguém clicar, iremos nos referir a aoDeletar que virá de props passado pelo Time, que por sua vez se refere à prop que também é aoDeletar, e em App.js nos referimos a DeletarColaborador.
}

export default Jogador