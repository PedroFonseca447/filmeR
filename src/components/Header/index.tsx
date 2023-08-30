import { FaBars, FaHome, FaRegistered } from "react-icons/fa"
import Logo from "../../assets/logo.png"
import { Button } from "../Button"
import * as Styles from "./styles"
import { Link } from "../Link"

export function Header() {
  return (
    <Styles.Container>
      <div>
        <Link to ="/"><img
            src={Logo}
            alt="Logo de Filmz. Botão de play ao lado do texto 'Filmz'"
          /></Link>
          <Link to = "/"><FaHome></FaHome> Home</Link>
          <Link to = "/wishlist"> <FaBars></FaBars>  Minha lista</Link>         
          
          <Link to ="/login"><FaRegistered></FaRegistered></Link>
      </div>

      <form className="search-wrapper">
        <input
          type="text"
          placeholder="Pesquise um filme"
        />
     
        <Button style={{ borderRadius: "0 4px 4px 0" }} type="submit">Pesquisar</Button>
      </form>
    </Styles.Container>
  )
}