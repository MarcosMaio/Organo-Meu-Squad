import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
}

const CampoTexto = ({aoAlterado, placeholder, label, valor, obrigatorio = false}: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input value={valor} 
                    onChange={aoDigitado} // usando evento => eu consigo pegar o nome do evento para passar como tipagem para o aoDigitado
                    required={obrigatorio} 
                    placeholder={placeholderModificada}
            />
        </div>
    )
}
//Criei uma propriedade aoAlterado que tem como função pegar o valor do alvo do evento. Depois irei chamar o onclick com o evento onChange

export default CampoTexto;