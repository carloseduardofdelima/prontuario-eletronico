import { Nav } from "react-bootstrap";
import { Sidebar, Main, Content } from "../styles";
import { AiOutlineLeft, AiOutlineRight, AiOutlineHome, AiOutlineMedicineBox, AiOutlinePlus } from "react-icons/ai";
import { TfiHome } from 'react-icons/tfi';
import { AiOutlineBarChart, AiOutlineExclamationCircle, AiOutlineSearch } from 'react-icons/ai';
import { SlPeople } from 'react-icons/sl';
import { BsFileText } from 'react-icons/bs';
import { BsCalendar2Week, BsThreeDots } from 'react-icons/bs';
import { RiUserSettingsLine } from 'react-icons/ri';
import { CiMedicalCase } from 'react-icons/ci';
import { CgMenuBoxed } from 'react-icons/cg';
import { HiUserCircle } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';
import { Header } from "../Components/Header/Index";
import { Dropdown, Card, Button, Tabs, Tab, Alert, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Pacientes() {
  const [isActive, setActive] = useState(true);
  
  const toggleSidebar = () => {
    console.log("you just clicked");
  
    setActive(!isActive);
  };

  return (
    <div>
      <Header>
        <div>
        <CgMenuBoxed size={40}/>
      <h1>Prontuário <br/>Eletrônico</h1>
        </div>
        <Dropdown>
        <HiUserCircle size={30} />
      <Dropdown.Toggle id="dropdown-basic">
        Usuário
      </Dropdown.Toggle>

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
          <Nav.Link> <Link to={"/home"}> <TfiHome/> Home</Link> </Nav.Link>
          <Nav.Link> <Link to={"/home"}><AiOutlineBarChart/> Estatísticas</Link></Nav.Link>
          <Nav.Link> <Link to={"/pacientes"}><SlPeople/> Pacientes</Link> </Nav.Link>
          <Nav.Link> <Link to={"/home"}><BsFileText/> Consultas</Link></Nav.Link>
          <Nav.Link> <Link to={"/home"}><BsCalendar2Week/> Agendamentos</Link></Nav.Link>
          <Nav.Link> <Link to={"/home"}><RiUserSettingsLine/> Gerenciamento de Usuários</Link> </Nav.Link>
        </Nav>

        
        <Nav defaultActiveKey="/home" className="flex-column">
          <p>Informações</p>
          <Nav.Link><Link to={"/home"}><CiMedicalCase/> Ajuda</Link></Nav.Link>
          <Nav.Link><Link to={"/home"}><CiMedicalCase/> Sugestões</Link></Nav.Link>
          <Nav.Link><Link to={"/home"}><CiMedicalCase/> Termos e Condições</Link></Nav.Link>
        </Nav>

        <img src="/logo-revela.png" alt="" />
      </Sidebar>
      <main className={isActive ? 'pacientes': 'pacientes mainOff'}>
      <div className="breadcrumb">
        <a href="#"><AiOutlineMedicineBox/> Prontuário Eletrônico</a><AiOutlineRight/><a href=""><FiUsers/> Pacientes</a>

      </div>
      <button className="back"><a href="/home"> <AiOutlineLeft/> Voltar</a></button>
      <h1>Listagem dos pacientes</h1>
      <form className="pesquisa" action="">
      <input type="text"  placeholder="Procure por paciente"></input>
      <Button variant="light">Exportar</Button>
      
      <Button variant="primary"><a href="/novopaciente"><AiOutlinePlus/> Adicionar paciente</a></Button>
      
      </form>
      
      <Table hover>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Última consulta</th>
          <th>Data de Nascimento</th>
          <th>CPF</th>
          <th>Telefone</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cláudia Abreu Brito Moura</td>
          <td>08/09/2022</td>
          <td>08/09/1989</td>
          <td>841.471.532-34</td>
          <td>84 95221-4989</td>
          <td><BsThreeDots/></td>
        </tr>
        <tr>
          <td>Cláudia Abreu Brito Moura</td>
          <td>08/09/2022</td>
          <td>08/09/1989</td>
          <td>841.471.532-34</td>
          <td>84 95221-4989</td>
          <td><BsThreeDots/></td>
        </tr>
        <tr>
          <td>Cláudia Abreu Brito Moura</td>
          <td>08/09/2022</td>
          <td>08/09/1989</td>
          <td>841.471.532-34</td>
          <td>84 95221-4989</td>
          <td><BsThreeDots/></td>
        </tr>
        <tr>
          <td>Cláudia Abreu Brito Moura</td>
          <td>08/09/2022</td>
          <td>08/09/1989</td>
          <td>841.471.532-34</td>
          <td>84 95221-4989</td>
          <td><BsThreeDots/></td>
        </tr>
        <tr>
          <td>Cláudia Abreu Brito Moura</td>
          <td>08/09/2022</td>
          <td>08/09/1989</td>
          <td>841.471.532-34</td>
          <td>84 95221-4989</td>
          <td><BsThreeDots/></td>
        </tr>
      </tbody>
    </Table>
      </main>
      
      </Main>
    </div>
  );
}
