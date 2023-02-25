import { Dropdown, Button, Alert, Col, Row, Form, FormControl, FormGroup } from "react-bootstrap";
import { BsCalendar2Week, BsDiamondFill } from "react-icons/bs";

export function FormStep2() {
    return (
        <>
            
        <h1>Dados pessoais do paciente</h1>
        <p>Preencher obrigatoriamente</p>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>CEP <BsDiamondFill size={10} className="orange"/></Form.Label>
            <Form.Control type="number" placeholder="Insira seu ID" required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>UF <BsDiamondFill size={10} className="orange"/></Form.Label>
            <Form.Control type="text" placeholder="Insira seu CPF" required />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Bairro <BsDiamondFill size={10} className="orange"/></Form.Label>
            <Form.Control type="number" placeholder="Insira seu CNS" required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Cidade <BsDiamondFill size={10} className="orange"/></Form.Label>
            <Form.Select aria-label="Default select example" required>
              <option>Brasileiro</option>
              <option value="1">Naturalidade 1</option>
              <option value="2">Naturalidade 2</option>
              <option value="3">Naturalidade 3</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridCity">
          <Form.Label>Logradouro <BsDiamondFill size={10} className="orange"/></Form.Label>
          <Form.Control required/>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Número <BsDiamondFill size={10} className="orange"/></Form.Label>
            <Form.Select aria-label="Default select example" required>
              <option>Profissão 1</option>
              <option value="2">Profissão 2</option>
              <option value="3">Profissão 3</option>
              <option value="4">Profissão 4</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Complemento <BsDiamondFill size={10} className="orange"/></Form.Label>
            <Form.Select aria-label="Default select example" required>
              <option>Masculino</option>
              <option value="1">Feminino</option>
            </Form.Select>
          </Form.Group>
        </Row>

        
      </>
    )
}