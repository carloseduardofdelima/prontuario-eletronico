import { Dropdown, Button, Alert, Col, Row, Form, FormControl, FormGroup } from "react-bootstrap";
import { BsCalendar2Week, BsDiamondFill } from "react-icons/bs";

export function FormStep1() {
    return (
        <>
            
        <h1>Dados pessoais do paciente</h1>
        <p>Preencher obrigatoriamente</p>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>ID <BsDiamondFill size={10} className="orange"/></Form.Label>
            <Form.Control type="number" placeholder="Insira seu ID" required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>CPF <BsDiamondFill size={10} className="orange"/></Form.Label>
            <Form.Control type="text" placeholder="Insira seu CPF" required />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>CNS <BsDiamondFill size={10} className="orange"/></Form.Label>
            <Form.Control type="number" placeholder="Insira seu CNS" required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Naturalidade <BsDiamondFill size={10} className="orange"/></Form.Label>
            <Form.Select aria-label="Default select example" required>
              <option>Brasileiro</option>
              <option value="1">Naturalidade 1</option>
              <option value="2">Naturalidade 2</option>
              <option value="3">Naturalidade 3</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridCity">
          <Form.Label>Nome Completo <BsDiamondFill size={10} className="orange"/></Form.Label>
          <Form.Control required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridCity">
          <Form.Label>Nome Social</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridCity">
          <Form.Label>Nome da m??e <BsDiamondFill size={10} className="orange"/></Form.Label>
          <Form.Control required/>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Profiss??o <BsDiamondFill size={10} className="orange"/></Form.Label>
            <Form.Select aria-label="Default select example" required>
              <option>Profiss??o 1</option>
              <option value="2">Profiss??o 2</option>
              <option value="3">Profiss??o 3</option>
              <option value="4">Profiss??o 4</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Sexo <BsDiamondFill size={10} className="orange"/></Form.Label>
            <Form.Select aria-label="Default select example" required>
              <option>Masculino</option>
              <option value="1">Feminino</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Religi??o <BsDiamondFill size={10} className="orange"/></Form.Label>
            <Form.Select aria-label="Default select example" required>
              <option>Religi??o 1</option>
              <option value="1">Religi??o 1</option>
              <option value="2">Religi??o 2</option>
              <option value="3">Religi??o 3</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Escolaridade <BsDiamondFill size={10} className="orange"/></Form.Label>
            <Form.Select aria-label="Default select example" required>
              <option>Ensino m??dio completo</option>
              <option value="1">Ensino superior incompleto</option>
              <option value="2">Ensino superior completo</option>
              <option value="3">Ensino m??dio incompleto</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Ra??a <BsDiamondFill size={10} className="orange"/></Form.Label>
            <Form.Select aria-label="Default select example" required>
              <option>Ra??a 1</option>
              <option value="2">Ra??a 2</option>
              <option value="3">Ra??a 3</option>
              <option value="4">Ra??a 4</option>
            </Form.Select>
          </Form.Group>
          <FormGroup as={Col}></FormGroup>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Estado civil <BsDiamondFill size={10} className="orange"/></Form.Label>
            <Form.Select aria-label="Default select example" required>
              <option>Estado civil 1</option>
              <option value="2">Estado civil 2</option>
              <option value="3">Estado civil 3</option>
              <option value="4">Estado civil 4</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Data de nascimento <BsDiamondFill size={10} className="orange"/></Form.Label>
            <Form.Control type="date" required/>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Lateridade <BsDiamondFill size={10} className="orange"/></Form.Label>
            <Form.Select aria-label="Default select example" required>
              <option>Destro</option>
              <option value="1">Canhoto</option>
              <option value="2">Ambidestro</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Telefone <BsDiamondFill size={10} className="orange"/></Form.Label>
            <FormControl type="tel" required/>
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email <BsDiamondFill size={10} className="orange"/></Form.Label>
          <Form.Control type="email" placeholder="Insira seu email" required/>
        </Form.Group>

        
      </>
    )
}