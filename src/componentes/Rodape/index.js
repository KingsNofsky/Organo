import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_black">
                            <img src="./imagens/fb.png" alt="facebook.png"/>
                        </a>
                    </li>

                    <li>
                        <a href="twitter.com" target="_black">
                            <img src="./imagens/tw.png" alt="twitter.png"/>
                        </a>
                    </li>

                    <li>
                        <a href="instagram.com" target="_black">
                            <img src="/imagens/ig.png" alt="facebook.png"/>
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <img src="./imagens/logo.png" alt="logo.png"/>
            </section>

            <section>
                <p>Desenvolvido por: Marcio Junior</p>
            </section>
        </footer>
    )
}

export default Rodape