import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, getAllUsers, addOneUser } from './features/users/userSlice';
import { ViewButton } from './component/ViewButton'
import { Modal } from './component/Modal'
import { data } from './__mocks__';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(getAllUsers)
  const [isOpen, setIsOpne] = useState(false);


  const [isAllUsers, setIsAllUsers] = useState(false)
  const fetchUsers= async () => {
    if(isAllUsers) {
      dispatch(addUsers(data))
    } else {
      dispatch(addUsers(data.slice(0, 3)))
    }
  }

  const hideAll = () => {
    setIsAllUsers(false)
  }

  const showAll = () => {
    setIsAllUsers(true)
  }

  

  const handleModalClose = () => {
    dispatch(addOneUser({}));
    setIsOpne(false);
  }
  useEffect(() => {
    fetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },  [isAllUsers])
  return (
    <div className="wrapper">
      <div className='container'>
        {users ? <div className='users-wrapper'>
          {users.map((item: any) => (
            <div key={`${item.phone}`} className='user-wrapper__border'>
              <div className="users-card">
              <div className='users-info'>
                <img 
                  alt={item.photo} 
                  src={`${process.env.PUBLIC_URL}/img/${item.photo}`} 
                  className="users-img"
                />
                <div>
                  <p className='users-name'>{item.name}</p>
                  <p className='users-nickname'>{item.nickname}</p>
                </div>
              </div>
              <ViewButton setIsOpne={setIsOpne} name={item.name} />
            </div>
            </div>
          ))}
          {
            isAllUsers ?<div 
            className='btn'
            onClick={hideAll}
          >
            Hide
          </div> : <div 
            className='btn'
            onClick={showAll}
          >
            View All
          </div>
          }
          
        </div> : <div>Not users</div>}
      </div>
      <Modal isShowing={isOpen} hide={handleModalClose}/>
    </div>
  );
}

export default App;
