import { FormControl, FormGroup, Nav } from "react-bootstrap";
import { Sidebar, Main, Content } from "../styles";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineHome,
  AiOutlineMedicineBox,
  AiOutlinePlus,
} from "react-icons/ai";
import { TfiHome } from "react-icons/tfi";
import {
  AiOutlineBarChart
} from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import { BsFileText } from "react-icons/bs";
import { BsCalendar2Week, BsDiamondFill } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import { CiMedicalCase } from "react-icons/ci";
import { CgMenuBoxed } from "react-icons/cg";
import { HiUserCircle } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { Header } from "../Components/Header/Index";
import { Dropdown, Button, Alert, Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FormStep1 } from "../Components/FormStep1/Index";
import { FormStep2 } from "../Components/FormStep2/Index";
import { MyVerticallyCenteredModal } from "../Components/Modal/Index";

export function NovoPaciente() {
  const [isActive, setActive] = useState(true);
  const [isStep, setStep] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const Next = e => {
    e.preventDefault();
    if(isStep) {
      setModalShow(true);
      return;
    }
    setStep(!isStep);

  }

  const Back = () => {
    if(isStep) {
      setStep(!isStep);
    }
    
  }
  
  const toggleSidebar = () => {
    console.log("you just clicked");
  
    setActive(!isActive);
  };

  return (
    <div>
      <Header>
        <div>
          <CgMenuBoxed size={40} />
          <h1>
            Prontuário <br />
            Eletrônico
          </h1>
        </div>
        <Dropdown>
          <HiUserCircle size={30} />
          <Dropdown.Toggle id="dropdown-basic">Usuário</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Header>
      <Main>
      <button onClick={toggleSidebar} className={isActive ? 'none' : 'buttonOn' }>
          <AiOutlineRight />
          Maximizar Menu
        </button>
        <Sidebar className={isActive ? null: 'sidebarOff'}>
          <button onClick={toggleSidebar}>
            <AiOutlineLeft />
            Minimizar Menu
          </button>
          <Nav defaultActiveKey="/home" className="flex-column">
            <p>Geral</p>
            <Nav.Link>
              {" "}
              <Link to={"/home"}>
                {" "}
                <TfiHome /> Home
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to={"/home"}>
                <AiOutlineBarChart /> Estatísticas
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to={"/pacientes"}>
                <SlPeople /> Pacientes
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to={"/home"}>
                <BsFileText /> Consultas
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to={"/home"}>
                <BsCalendar2Week /> Agendamentos
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to={"/home"}>
                <RiUserSettingsLine /> Gerenciamento de Usuários
              </Link>{" "}
            </Nav.Link>
          </Nav>

          <Nav defaultActiveKey="/home" className="flex-column">
            <p>Informações</p>
            <Nav.Link>
              <Link to={"/home"}>
                <CiMedicalCase /> Ajuda
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/home"}>
                <CiMedicalCase /> Sugestões
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/home"}>
                <CiMedicalCase /> Termos e Condições
              </Link>
            </Nav.Link>
          </Nav>

          <img src="/logo-revela.png" alt="" />
        </Sidebar>
        <main className={isActive ? 'novo-paciente': 'novo-paciente mainOff'}>
          <div className="breadcrumb">
            <a href="#">
              <AiOutlineMedicineBox /> Prontuário Eletrônico
            </a>
            <AiOutlineRight />
            <a href="">
              <FiUsers /> Cadastro de novo paciente
            </a>
          </div>
          
          <button className="back">
          <a href="/pacientes">
            <AiOutlineLeft /> Voltar
            </a>
          </button>
          
          <h1>Cadastro de Novo Paciente</h1>
          <div className="form-steps">
            <div>
              <img src={isStep ? '/circle_blue_number-2.png' : '/circle_check.png'} alt="number 1" />
              <p>Identificação</p>
            </div>
            <div>
              <img src="/circle_blue_number-2.png" alt="number 2" />
              <p>Endereço</p>
            </div>
          </div>

        <Form onSubmit={Next}>
        
         {isStep ? <FormStep2/>: <FormStep1/> }
         <div className="buttons">
          <Button variant="light" onClick={Back}>
            {isStep ? 'Voltar' : 'Cancelar'}
          </Button>
          <Button className="blue" variant="primary" type="submit" >
            Prosseguir
          </Button>
        </div>
         </Form>
        </main>

        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
      </Main>
    </div>
  );
}
