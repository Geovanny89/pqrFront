// TérminosDeUsoModal.js
import React from 'react';
import Modal from 'react-modal';
import { Button} from '@mui/material';
import './terminos.css'

const Terminos = ({ isOpen, onRequestClose,onAccept }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Términos de Uso"
      className="modal-terminos"
      appElement={document.getElementById('root')}
      
      // Agrega las clases y estilos necesarios para la apariencia de la modal
    >
      {/* Contenido de los términos de uso */}
      <h2>Términos de Uso</h2>
      <h3>Condiciones de uso del Centro Tecnológico de Cúcuta</h3>
      <p>La Página Web del Tecnológico de Cúcuta tiene por objeto facilitar al público en general la información relativa a la Administración Departamental. Le solicitamos leer atentamente los términos de referencia para utilizar correctamente los contenidos digitales. La utilización de esta publicación y su contenido está sujeta a las condiciones de uso y confidencialidad que se expondrán a continuación.</p>
      <h4>Sus datos están protegidos bajo la ley de protección de datos 1581 del 2012</h4>
      <ul>
        <li> Al acceder, navegar o usar este sitio Web, usted reconoce que ha leído, entendido, y se obliga a cumplir con estos términos y con todas las leyes y reglamentos aplicables. Si no acepta dichos términos y condiciones, le rogamos se abstenga de utilizar nuestra Página Web y su contenido.</li><hr />
        <li> Por tratarse de un sitio público, es posible descargar material de www.ctc.edu.co para uso personal y no comercial, siempre y cuando se haga expresa mención de la propiedad a cargo del Centro Tecnológico de Cúcuta.</li><hr />
        <li> El Centro Tecnológico de Cúcuta no persigue ningún lucro, ganancia o interés comercial con los contenidos o links que se publican en su página web y en las páginas web de otras dependencias o entidades adscritas y vinculadas, a los cuales se accede a través de www.ctc.edu.co.</li><hr />
        <li> La División Tecnológica y de Sistemas y la Oficina de Prensa del Centro Tecnológico de Cúcuta; están encargados de administrar este Sitio Web, lo cual les permite realizar mejoras o cambios en los servicios o programas descritos en esta página en cualquier momento y sin previo aviso. Esta página Web incluye avisos sobre servicios y productos propios e información de copyright, cuyos términos deben observarse y seguirse.</li><hr />
        <li> El Usuario reconoce que el ingreso de información personal, lo realiza de manera voluntaria y ante la solicitud de requerimientos específicos por el Centro Tecnológico de Cúcuta para realizar un trámite, presentar una queja o reclamo, o para acceder a los mecanismos interactivos. El usuario también comprende que los datos por él consignados harán parte de un archivo y/o base de datos que podrá ser usado por la Entidad para efectos de surtir determinado proceso. El Usuario podrá modificar o actualizar la información suministrada en cualquier momento.</li><hr />
        <li> La Página Web tiene por finalidad brindar al usuario todo tipo de información relacionada con la gestión del gobierno en todos los planes, programas y proyectos, por medio de boletines, cifras, noticias. En ningún caso esta información deberá considerarse como exhaustiva, completa o que de cualquier forma satisfaga todas las necesidades del usuario. </li><hr />
        <li> www.ctc.edu.co es titular de todos los derechos sobre el software de la Página Web, así como de los derechos de propiedad industrial e intelectual referidos a los contenidos que en ella se incluyan, a excepción de los derechos sobre productos y servicios que no son propiedad de esta administración, cuyas marcas están registradas a favor de sus respectivos titulares, y como tal son reconocidas por el Centro Tecnológico de Cucuta. </li><hr />
        <li> Esta Página Web posee un sistema de protección tecnológico que va desde sus servidores hasta la salida a Internet, ninguna transmisión por Internet puede garantizar su seguridad al 100%. El Centro Tecnológico de Cúcuta no puede garantizar que la información ingresada a su sitio web o transmitida utilizando su servicio sea completamente segura, con lo cual el usuario corre su propio riesgo.</li><hr />
        <li> Centro Tecnológico de Cucuta no responderá en ningún caso y bajo ninguna circunstancia, por los ataques o incidentes contra la seguridad de su Página Web o contra sus sistemas de información; o por cualquier exposición o acceso no autorizado, fraudulento o ilícito a su página Web y que puedan afectar la confidencialidad, integridad o autenticidad de la información publicada o asociada con los contenidos y servicios que se ofrecen en el. </li><hr />
        <li> El Centro Tecnológico de Cucuta no se hace responsable respecto a la información que se halle fuera de esta Página Web y no sea gestionada directamente por el administrador de la Página Web www.ctc.edu.co. Los vínculos (links) que aparecen en el Sitio Web tienen como propósito informar al Usuario sobre la existencia de otras fuentes susceptibles de ampliar los contenidos que ofrece la página Web, o que guardan relación con aquellos.</li><hr />
        <li> Esta página puede tener enlaces a otros sitios de interés o a documentos localizados en otras páginas web de propiedad de otras entidades, personas u organizaciones diferentes al Centro Tecnológico de Cúcuta. Solamente por el hecho de que el usuario acceda a otro sitio web o a un documento individual localizado en otra página, a través de un link o un vínculo establecido en el sitio Web del Centro Tecnológico de Cucuta, el usuario deberá someterse a las condiciones de uso y a la política de privacidad de la página web a la que envía el link.</li><hr />
        <li> Por medio de esta versión electrónica el Centro Tecnológico de Cucuta publica los temas y actividades que tienen que ver con su misión, su visión, objetivos y las funciones que corresponden a su objeto social. Adicionalmente, por este medio la entidad da a conocer información sobre programas educativos, cursos, diplomados y programas técnicos y laborales.</li><hr />
      </ul>
      <Button onClick={onAccept} variant="contained" color="primary">Aceptar</Button>
      <Button onClick={onRequestClose} variant="contained" color="primary">Cerrar</Button>
    </Modal>
  );
};

export default Terminos;
