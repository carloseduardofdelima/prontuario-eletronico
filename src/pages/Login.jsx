import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Container } from "../styles";
import { LoginStyle } from "../styles";
import { CgMenuBoxed } from "react-icons/cg";

export function Login() {
  return (
    <Container>
      <div>
        <section className="title">
          <CgMenuBoxed size={70}/>
          <h1>Prontuário</h1>
          <h1>Eletrônico</h1>
          <div></div>
          <img src="/revela_logoWhite.png" alt="" />
        </section>

        <Carousel width={"120%"} showArrows={false} showThumbs={false}>
          <div>
            <img src="/IMG_3573.png" alt="First slide" />
          </div>
          <div>
            <img src="/IMG_3569.png" alt="Second slide" />
          </div>

          <div>
            <img src="/IMG_3563.png" alt="Third slide" />
          </div>
          <div>
            <img src="/IMG_3553.png" alt="Third slide" />
          </div>
        </Carousel>
      </div>
      <LoginStyle>
        <h1>Login do Usuário</h1>
        <a className="login" href="https://login.sabia.ufrn.br/entrar/">
          <img src="/logo-sabia2.png" alt="" />
          <p>Entrar com o Sabiá</p>
        </a>
        <a className="register" href="https://perfil.sabia.ufrn.br/cadastrar/">
          <img src="/logo-sabia2.png" alt="" />
          <p>Criar conta no Sabiá</p>
        </a>
        <a className="about" href="">
          Saiba mais sobre o Sabiá
        </a>
      </LoginStyle>
    </Container>
  );
}
