import React from 'react'
import { FiEdit } from 'react-icons/fi'
import IMG from '../assets/img.png'
import { BsTrash } from 'react-icons/bs'

const readRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
    <th> <img src={IMG} alt="" />{contact.company}</th>
    <th>{contact.email}</th>
    <th> <img src={IMG} alt="" /> {contact.create}</th>
    <th> <img src={IMG} alt="" /> {contact.update}</th>
    <th>{contact.date}</th>
    <th><button type='button' id='edit' onClick={(event)=> handleEditClick(event, contact)}><FiEdit/></button>
    <button type="button" id='delete' onClick={() => handleDeleteClick(contact.id)}>
          <BsTrash></BsTrash>
        </button></th>
  </tr>
  )
}

export default readRow