// InstructionModal.js
import React from 'react';
import Modal from 'react-modal';
import { Typography, Button } from '@mui/material';
import './instruction.css'

const InstructionModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Instrucciones"
      className="modal-container"
      appElement={document.getElementById('root')}
    >
      <Typography variant="h6" >
        Por favor, lea las siguientes instrucciones:
      </Typography>
      <ul >
                    <li >
                        <span className="modal-text">Petición:</span><br /> Es el derecho que tiene toda persona a presentar peticiones respetuosas a las autoridades, en los términos señalados en este código, por motivos de interés general o particular, y a obtener pronta resolución completa y de fondo sobre la misma.
                    </li>
                    <li>
                        <span className="modal-text">Queja:</span><br /> Es la manifestación de protesta, censura, descontento o inconformidad que formula una persona en relación a la conducta irregular realizada por uno o varios servidores públicos en desarrollo de sus funciones.
                    </li>
                    <li>
                        <span className="modal-text">Reclamo:</span><br /> Es la manifestación ya sea por motivo general o particular, referente a la prestación indebida de un servicio o a la inatención oportuna de una solicitud.
                    </li>
                    <li>
                        <span className="modal-text">Sugerencia:</span><br /> Es una propuesta que se presenta para incidir o mejorar un proceso cuyo objeto está relacionado con la prestación de un servicio o el cumplimiento de una función pública.
                    </li>
                    <li>
                        <span className="modal-text">Denuncia:</span><br /> Es el relato que un ciudadano realiza, en cumplimiento de su deber de solidaridad, para enterar a las autoridades de la existencia de hechos irregulares, con el fin de activar los mecanismos de investigación y sanción.
                    </li>
                    <li>
                        <span className="modal-text">Felicitaciones:</span><br /> Manifestación en la que se expresa la satisfacción, agradecimiento o similar con motivo de algún suceso favorable, con relación a la prestación del servicio por parte de la entidad.
                    </li>
                </ul>
      <Button onClick={onRequestClose} variant="contained" color="primary">
        Entendido
      </Button>
    </Modal>
  );
};

export default InstructionModal;
