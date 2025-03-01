import { Link } from "react-router-dom";

function Erro() {
    return(
      <div>
        <h2>Parece que essa pagina não existe!</h2>
        <span>Por favor selecione essas paginas existentes:</span> <br/>
        <Link to="/">Home</Link> <br/>
            <Link to="/sobre">Sobre</Link> <br/>
            <Link to="/contato">Contato</Link>
      </div>
    )
}

export default Erro;