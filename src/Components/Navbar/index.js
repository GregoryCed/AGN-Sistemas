import './Navbar.css';

const Navbar = () => {
    return(
        <header className='navbar'>
            <img src="/images/logoEmpresa.png" alt="Logo da Empresa"/>
            <ul>
                <li><a href="">Formulário</a></li>
                <li><a href="">Arquivos</a></li>
            </ul>
        </header>
    )
}

export default Navbar