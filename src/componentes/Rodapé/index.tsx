import './Rodapé.css'

interface RodapéProps {
    imagemFacebook : string
    imagemTwitter : string
    imagemInstagram : string
    imagemLogo : string
    textoAlternativo?: string
    children : string
}

const Rodapé = ({imagemFacebook, imagemTwitter, imagemInstagram, imagemLogo, children, textoAlternativo}: RodapéProps) => {
    return (
            <footer className='footer'>
            <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src={imagemFacebook} alt={textoAlternativo} />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src={imagemTwitter} alt={textoAlternativo}/>
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src={imagemInstagram} alt={textoAlternativo} />
                    </a>
                </li>
            </ul>
        </section>
        <section className='logo'>
            <img src={imagemLogo} alt={textoAlternativo} />
        </section>
        <section>
            <p>
                {children}
            </p>
        </section>
            </footer>
    )
}

export default Rodapé