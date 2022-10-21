import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { Link } from './Link'
import { getOneUser } from '../features/users/userSlice';
import './Modal.css';

export const Modal = ({ isShowing, hide }) => {
  const user = useSelector(getOneUser)

  if (Object.keys(user).length === 0) return null
 
  return (
    <>
      {isShowing && user ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay"/>
          <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
              <div className="modal-header">
                <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className='modal-content'>
                <div className='modal-info-header'>
                  <img 
                    alt={user.photo} 
                    src={`${process.env.PUBLIC_URL}/img/${user.photo}`}
                    className="modal-info-img" 
                  />
                  <div>
                    <h2>{user?.name}</h2>
                    <p className='modal-info-position'>{user.position}</p>
                  </div>
                 
                </div>
                <div className='modal-info'>
                  <div className='modal-info-contacts'>
                    <div className='modal-info-contact'>
                      <p className='modal-contact-name'>Phone</p>
                      <p className='modal-contact-phone'>{user.phone}</p>
                    </div>
                    <div className='modal-info-contact'>
                      <p className='modal-contact-name'>Url</p>
                      <Link to={user.email} name='test@gmail.com' />
                    </div>
                    <div className='modal-info-contact'>
                      <p className='modal-contact-name'>Email</p>
                      <Link to={user.email} name={user.email} />
                    </div>
                  </div>
                  <div className='modal-info-btn'>Send Message</div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>, document.body
      ) : null}
    </>
  )
};
