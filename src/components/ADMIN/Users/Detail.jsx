import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../../Redux/action';
import './detail.css'

export default function Detail({ userId }) {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details); // Cambiado de 'detail' a 'details'

  useEffect(() => {
    dispatch(getDetail(userId));
  }, [dispatch, userId]);

  if (!details) {
    return <div>Cargando detalle del usuario...</div>;
  }

  const { name, lastName, userName, email, role } = details; // Cambiado de 'detail' a 'details'

  return (
    <div className='container-details'>
      <div className="btn-details">
      <a href="/home"> X </a>

      </div>
      <div className="detail-name">
      <span>Nombre: {name}</span>
      <span>Apellido: {lastName}</span>

      </div>
      <div className="detail email">
      <span>Alias: {userName}</span>
      <span>Email: {email}</span>

      </div>
      <div className="detail-role">
      <span>Rol: {role}</span>

      </div>
      
    </div>
  );
}
