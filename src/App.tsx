import { useState } from 'react';
import Formulario from './componentes/Formulario/index';
import Time from './componentes/Time/index';
import Rodapé from './componentes/Rodapé/index';
import Banner from './componentes/Banner/index'
import { IJogador } from './shared/interface/IJogadores';


function App() {

  const times = [ 
  {
    nome: 'League Of Legends',
    corDoCard: '#daa520',
    corDeFundo: '#255adf',
  },
  {
    nome: 'Raibow Six',
    corDoCard: '#2f4f4f',
    corDeFundo: '#111111',
  },
  {
    nome: 'Overwatch',
    corDoCard: '#ffa500',
    corDeFundo: '#fff8dc',
  },
  {
    nome: 'Dead By Daylight',
    corDoCard: '#ff4500',
    corDeFundo: '#1c1c1c',
  },
  {
    nome: 'Nanatsu 7ds',
    corDoCard: '#fff80a',
    corDeFundo: '#d100d1',
  },
  {
    nome: 'Smite',
    corDoCard: '#191970',
    corDeFundo: '#f0a90a',
  },
  {
    nome: 'Minecraft',
    corDoCard: '#783c00',
    corDeFundo: '#228b22',
  },
  
]

  const [jogadores, setJogadores] = useState<IJogador[]>([]) 

  const aoNovoJogadorAdicicionado = (jogador: IJogador) => { //A função aoNovoJogadorAdcicionado() está sendo passada como props para o componente <Formulario /> com o nome de aoJogadorCadastrado. Lá no componente <Formulario /> essa props é recebida no argumento da função e é chamada dentro da função aoSalvar() recebendo como parâmetro um objeto com as informações recebidas do formulário.
//Esse objeto com as informações do formulário são passadas para a função aoNovoColaboradorAdicionado() no componente <App/> e lá será mostrado em um console.log() mais o conceito do set.
  setJogadores([...jogadores, jogador]) //vamos chamar o setJogadores(), criar um novo array [], espalhar ... todos os jogadores antigos e adicionar o novo colaborador no final. Existem outras formas de fazer, mas vamos seguir desssa forma.
}

const [isVisible, setIsVisible] = useState(false); //Criei a const isVisible.

const escondendoFormulario = () => { //variavel reponsavel por armazenar o set state isVisible.
  setIsVisible(!isVisible); //Defini que esse set isVisible começa com false.
};

return (
    <div className="App">
      <Banner 
          enderecoImagem='/imagens/banner.png'
          textoAlternativo='O banner principal da pagina'
      />
      {!isVisible && ( //Aqui eu defini operador lógico && que só ativa se a condição for verdadeira uma condição de que qaundo o estado do isVisible for true que e quando eu clicar no botão assim mudando seu estado ele vai mudar o estado para de false para true assim mostrando o formulario.
      <Formulario 
          times={times.map(time => time.nome)} 
          aoJogadorCadastrado={jogador => aoNovoJogadorAdicicionado(jogador)} 
      /> 
          )}
      <section className="times">  
        <h1>Meu Squad:</h1>
        <img className='retangulo' src="/imagens/rectangle 16.png" alt =""></img>
        <img  className='logo_botao' onClick={escondendoFormulario} src="/imagens/Botão add-01 1.png" alt =""></img>
      </section>
      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corDoCard={time.corDoCard}
        corDeFundo={time.corDeFundo}
        jogadores={jogadores.filter(jogador => jogador.time === time.nome )} //Aqui eu irei fazer um filtre que irá devolver os dados do jogador para mim e adicionar apenas no time que for igual ao nome do time que o jogador selecionou.
      />)}
      <Rodapé
        imagemFacebook='/imagens/fb.png'
        imagemTwitter='/imagens/tw.png'
        imagemInstagram='/imagens/ig.png'
        imagemLogo='/imagens/logo.png'
        children='Desenvolvido por Marcos Maio'
        textoAlternativo=''
      />
      
    </div>
  ); //Agora temos uma iteração: para cada time da nossa lista de times cria-se um componente chamado Time com esse nome , Temos que pegar o times que está definido e fazer um .map. Vamos mapear para cada Time em times e vamos colocarmos um time onde o nome é o time.nome
  //O filter ele parece o map porque ele pega um array e transforma em outro array. Porém, de acordo com uma condição, um booleano, ele põe ou não põe esse elemento nessa array nova.
}

export default App;


