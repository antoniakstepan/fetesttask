import React from "react";
import { useDispatch } from 'react-redux';
import {  addOneUser } from '../features/users/userSlice';
import { data } from '../__mocks__'

type ViewButtonProps = {
  setIsOpne: any;
  name: string;
}
export const ViewButton = ({setIsOpne, name}: ViewButtonProps ) => {
  const dispatch = useDispatch();

  const fetchSelectedUser = async(name: string) => {
    const user = data.find(item => item.name === name)
    dispatch(addOneUser(user))
  }
  const handleModalOpen = (name: string) => {
    fetchSelectedUser(name)
    setIsOpne(true)
  }

  return (
    <div 
      className='user-btn'
      onClick={() => handleModalOpen(name)}
    >
      View
    </div>
  )
}