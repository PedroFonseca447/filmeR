import { FaBars, FaHome, FaRegUser } from "react-icons/fa"
import Logo from "../../assets/logo.png"
import { Button } from "../Button"
import * as Styles from "./styles"
import { Link } from "../Link"
import { useNavigate } from "react-router-dom"
import { ButtonVariants } from "../Button/types"

export function Header() {
    const navigate = useNavigate();
  return (
    <Styles.Container>
      <div>
        <Link to ="/"><img
            src={Logo}
            alt="Logo de Filmz. Botão de play ao lado do texto 'Filmz'"
          /></Link>
          <Link to = "/"><FaHome></FaHome> Home</Link>
          <Link to = "/wishlist"> <FaBars></FaBars>  Minha lista</Link>         
          
          
      </div>
          
          <Button type="button"
                  variant={ButtonVariants.Tertiary}
                  onClick={() => navigate("/login")}
          >
            <FaRegUser></FaRegUser>
          </Button>
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