import React from 'react'

const EditRow = ({ editData, handleEditDataChange, handleCancelClick}) => {
  return (
    <tr>
       <td>
        <input 
        id='input-edit'
        type="text"
        required="required"
        placeholder="Ime preduzeca"
        name='company'
        value={editData.company}
        onChange={handleEditDataChange}
        ></input>
       </td>
       <td>
       <input
        type="email"
        required="required"
        placeholder="email"
        name='email'
        value={editData.email}
        onChange={handleEditDataChange}
        ></input>
       </td>
       <td>
       <input
        type="text"
        required="required"
        placeholder="Ime"
        name='create'
        value={editData.create}
        onChange={handleEditDataChange}
        ></input>
       </td>
       <td>
       <input
        type="text"
        required="required"
        placeholder="Ime"
        name='update'
        value={editData.update}
        onChange={handleEditDataChange}
        ></input>
       </td>
       <td>
       <input
        type="date"
        required="required"
        name='date'
        value={editData.date}
        onChange={handleEditDataChange}
        ></input>
       </td>
       <td>
        <button type="submit" id='save'>Save</button>
        <button type="button" id='cancle' onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  )
}

export default EditRow