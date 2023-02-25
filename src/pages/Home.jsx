import { Nav, Row } from "react-bootstrap";
import { Sidebar, Main, Content } from "../styles";
import { AiOutlineLeft, AiOutlineRight, AiOutlineHome, AiOutlineMedicineBox, AiOutlinePlus } from "react-icons/ai";
import { TfiHome } from 'react-icons/tfi';
import { AiOutlineBarChart, AiOutlineExclamationCircle } from 'react-icons/ai';
import { SlPeople } from 'react-icons/sl';
import { BsFileText, BsSquareFill } from 'react-icons/bs';
import { BsCalendar2Week } from 'react-icons/bs';
import { RiUserSettingsLine } from 'react-icons/ri';
import { CiMedicalCase } from 'react-icons/ci';
import { CgMenuBoxed } from 'react-icons/cg';
import { HiUserCircle, HiOutlineClipboardList } from 'react-icons/hi';
import { Header } from "../Components/Header/Index";
import { Dropdown, Card, Button, Tabs, Tab, Alert, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { VictoryPie } from "victory";
import { useState } from "react";

export function Home() {
  const [isActive, setActive] = useState(true);
  const sampleData = [
    { x: "Realizada", y: 35 },
    { x: "Não realizada", y: 40 },
  ];

  const sampleData2 = [
    { x: "Atendidas", y: 35 },
    { x: "Canceladas", y: 40 },
    { x: "Em andamento", y: 40 }
  ];
  
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
      
      
      <section>
      <main className={isActive ? null: 'mainOff'}>
      <div className="breadcrumb">
        <a href="/"><AiOutlineMedicineBox/> Prontuário Eletrônico</a><AiOutlineRight/><a href="/home"><AiOutlineHome/> Página inicial</a>
      </div>
      
      <Content>
      
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Pacientes em tratamento</Card.Title>
          <Card.Text>
            <hr />
            <a href="#">Acessar Listagem <AiOutlineExclamationCircle/></a>
            <br />
            <div className="numbers">
              <h1>30</h1>
              <HiOutlineClipboardList  className="blue_icon" size={40}/>
            </div>
            
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="red" border="danger" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Pacientes em atraso</Card.Title>
          <Card.Text>
            <hr />
          <a href="/pacientes">Acessar Listagem <AiOutlineExclamationCircle/></a>
          <br />
          <div className="numbers">
          <h1>8</h1>
          <HiOutlineClipboardList className="red_icon" size={40}/>
          </div>
          
          </Card.Text>
        </Card.Body>
      </Card>
      </Content>

      <Content>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Busca ativa do paciente</Card.Title>
          <Card.Text className="graph">
          <BsSquareFill className="blue-square"/>
          Realizada
          <BsSquareFill className="red-square"/>
          Não Realizada
          </Card.Text>
          <VictoryPie innerRadius={100} data={sampleData} colorScale={["#3d95c0", "red"]}/>
        </Card.Body>
      </Card>

      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Consultas para o dia</Card.Title>
          <Card.Text className="graph">
            <BsSquareFill className="blue-square"/>
            Atendidas
            <BsSquareFill className="yellow-square"/>
            Canceladas
            <BsSquareFill className="grey-square"/>
            Em andamento
          </Card.Text>
          <VictoryPie innerRadius={100} data={sampleData2} colorScale={["#3d95c0", "yellow", "red"]}/>
        </Card.Body>
      </Card>
      </Content>
      
      </main>
      <div className={isActive ? 'notes': 'notesOff'}>
        <main>
        <h1>Bloco de Notas</h1> <Button className="blue" variant="primary">Adicionar nota <AiOutlinePlus/></Button>{' '}
        </main>
        <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      
      <Tab eventKey="home" title="Notas atuais">
      <Row>
      <Col>
      <Alert variant="primary">
      <Alert.Heading>Medicação 04/09/2022</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
    </Alert>
      <Alert variant="primary">
      <Alert.Heading>Medicação 04/09/2022</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
    </Alert>
    </Col>
    <Col>
    
      <Alert variant="primary">
      <Alert.Heading>Medicação 04/09/2022</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
    </Alert>
      <Alert variant="primary">
      <Alert.Heading>Medicação 04/09/2022</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
    </Alert>
    </Col>
    </Row>
    
      </Tab>
      <Tab eventKey="profile" title="Notas arquivadas">
        <Row>
          <Col>
      <Alert variant="secondary">
      <Alert.Heading>Medicação 04/09/2022</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
    </Alert>
    </Col>
    <Col>
      <Alert variant="secondary">
      <Alert.Heading>Medicação 04/09/2022</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
    </Alert>
    </Col>
    </Row>
      </Tab>
      
    </Tabs>
      </div>
      </section>

      </Main>
    </div>
  );
}
