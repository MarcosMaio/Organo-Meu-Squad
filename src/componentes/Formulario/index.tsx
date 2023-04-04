import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { IJogador } from "../../shared/interface/IJogadores";

interface FormularioProps {
    aoJogadorCadastrado: (jogador: IJogador) => void
    times: string []
}

const Formulario = ({aoJogadorCadastrado, times}: FormularioProps) => { 
        //o conceito do state: temos valor, que é o que lemos, e o setter para o React saber que queremos uma alteração.
        const [nome, setNome] = useState('')
        const [função, setFunção] = useState('')
        const [imagem, setImagem] = useState('')
        const [personagem, setPersonagem] = useState('')
        const [avatar, setAvatar] = useState('')
        const [time, setTime] = useState('')

        const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
            evento.preventDefault()
            aoJogadorCadastrado({
                nome,
                função,
                imagem,
                personagem,
                avatar,
                time
            })
            setNome('')
            setFunção('')
            setImagem('')
            setPersonagem('')
            setAvatar('')
            setTime('')
        }

    return (
        <section className="formulario">
        <form onSubmit={aoSalvar}>
            <h2 className="form-titulo">Preencha os dados para criar o card do jogador.</h2>
            <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome" 
                valor={nome} //Defini que setNome que começa vazio
                aoAlterado={valor => setNome(valor)} //Agora chamo o aoAlterado que recebe props.aoAlterado(evento.target.value) lá do CampoTexto, e pego o novo valor e set ele.
        />
            <CampoTexto 
                obrigatorio={true} 
                label="Função" 
                placeholder="Digite sua Função"
                valor={função}
                aoAlterado={valor => setFunção(valor)} 
            />
            <CampoTexto 
                obrigatorio={true} 
                label="Imagem" 
                placeholder="Digite o endereço da imagem do jogador"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)} 
            />
            <CampoTexto 
                obrigatorio={true} 
                label="Personagem" 
                placeholder="Digite o nome do seu personagem"
                valor={personagem}
                aoAlterado={valor => setPersonagem(valor)} 
            />
            <CampoTexto 
                obrigatorio={true} 
                label="Avatar" 
                placeholder="Digite o endereço da imagem do personagem"
                valor={avatar}
                aoAlterado={valor => setAvatar(valor)} 
            />
            <ListaSuspensa 
                obrigatorio={true}
                label="Times" 
                itens={times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
            />
            <Botao>
                Criar Card
            </Botao>
        </form>
    </section>
);
};

export default Formulario;
