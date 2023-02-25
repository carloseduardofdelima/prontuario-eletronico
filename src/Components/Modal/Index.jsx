import { Modal, Button, Row, Col, ModalFooter } from "react-bootstrap";
import { CiMedicalCase } from "react-icons/ci";
import { AiOutlineCheckCircle } from "react-icons/ai";

export function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="green" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <CiMedicalCase/> Cadastro salvo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_body">
            <AiOutlineCheckCircle size={60}/>
          <h4>Paciente cadastrado com sucesso!</h4>
        </Modal.Body>
        <Modal.Footer className="modal_footer">
            <Button variant="light" onClick={props.onHide}>Perfil do paciente</Button>
            <Button variant="success" onClick={props.onHide}>Primeira Avaliação</Button>
        </Modal.Footer>
        
          
      </Modal>
    );
  }