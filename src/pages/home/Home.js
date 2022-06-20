import React, { useState, Fragment } from 'react'
import './home.css'
import Profil from '../../assets/ahmad.png'
import Dashboard from '../../assets/Vector.png'
import Izvestaj from '../../assets/Shape.png'
import Maticni from '../../assets/Shape1.png'
import Obrasci from '../../assets/Schedule.png'
import {BsArrowDownUp} from 'react-icons/bs'
import data from '../../eco-reg.json'
import ReadRow from '../../components/ReadRow'
import EditRow from '../../components/EditRow'

const Home = () => {

const [contacts, setContacts] = useState(data);

const [editData, setEditData] = useState({
    company: "",
    email: "",
    create: "",
    update: "",
    date: "",
});

const [editContact, setEditContact ] = useState(null);

const handleEditDataChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newData = { ...editData };
    newData[fieldName] = fieldValue;

    setEditData(newData);
  };

const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContact(contact.id);

    const dataValues = {
        company: contact.company,
        email: contact.email,
        create: contact.create,
        update: contact.update,
        date: contact.date,
    }

    setEditData(dataValues);

}

const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContact,
      company: editData.company,
      email: editData.email,
      create: editData.create,
      update: editData.update,
      date: editData.date,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContact);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContact(null);
  };

const handleCancelClick = () => {
    setEditContact(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div id='home'>
        <div id='sidebar' className="col-2 p-4">
            <div id='profile' className="row">
                <div className="profile-card">
                    <img src={Profil} alt="profil" />
                    <div>
                        <h6>Alex Tselekidis</h6>
                        <small className='text-muted'>@alextselekidis</small>
                    </div>
                </div>
            </div>
            <div id='sidebar-menu' className="row">
                <ul>
                    <li><a className='text-decoration-none' href="#home"> <img src={Dashboard} alt="dashboard" />Home</a></li>
                    <li><a className='text-decoration-none' href="#izvestaj"> <img src={Izvestaj} alt="izvestaj" />  Izvestaji</a></li>
                    <li><a className='text-decoration-none' href="#maticni"> <img src={Maticni} alt="maticni" />  Maticni Podaci</a></li>
                    <li><a className='text-decoration-none' href="#obrasci"> <img src={Obrasci} alt="obrasci" />  Obrasci</a></li>
                </ul>
            </div>
            <div id='cards' className="row">
                <h6 className='text-muted'>NAJCESCE KORISCENE</h6>
                <ul>
                    <li>
                        <div id='card'>
                            <h5>EV</h5>
                            <p>Lorem Ipsum</p>    
                        </div>
                    </li>
                    <li>
                        <div id='card'>
                            <h5>EV</h5>
                            <p>Lorem Ipsum</p>    
                        </div>
                    </li>
                    <li>
                        <div id='card'>
                            <h5>EV</h5>
                            <p>Lorem Ipsum</p>    
                        </div>
                    </li>
                    <li>
                        <div id='card'>
                            <h5>EV</h5>
                            <p>Lorem Ipsum</p>    
                        </div>
                    </li>
                    <li>
                        <div id='card'>
                            <h5>EV</h5>
                            <p>Lorem Ipsum</p>    
                        </div>
                    </li>
                    <li>
                        <div id='card'>
                            <h5>EV</h5>
                            <p>Lorem Ipsum</p>    
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col p-4" id='view'>
            <h2>Lista Preduzeca</h2>
            <div className="row py-4">
                <div className="col-3" id='pretraga'>
                    <div className="row p-2">
                    <input type="search" name="search" id="search" placeholder='Pretrage' />
                    </div>
                </div>
                <div className="col-3">
                <small>Filtriraj po datumu</small>
                   <div className="row p-2">
                    <input type="date" name="date" id="date" />
                    </div>
                </div>
                <div className="col-2">
                    <small>Prikaz</small>
                    <div className='row p-2'>
                    <select name="all" id="all">
                        <option value="Sve">Sve</option>
                    </select>
                    </div>
                </div>
            </div>
            <div className="row">
            <form onSubmit={handleEditFormSubmit}>
            <table>
                <thead>
                    <tr>
                      <td id='data'>Preduzece <BsArrowDownUp/></td>
                      <td id='data'>Email <BsArrowDownUp/></td>
                      <td id='data'>Kreirao <BsArrowDownUp/></td>
                      <td id='data'>Azurirao <BsArrowDownUp/></td>
                      <td id='data'>Datum <BsArrowDownUp/></td>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact)=> (
                        <Fragment>
                            { editContact === contact.id ? ( 
                            <EditRow editData={editData} 
                            handleEditDataChange={handleEditDataChange}
                            handleCancelClick={handleCancelClick}/>
                            ) : (
                            <ReadRow contact = {contact}
                             handleEditClick={handleEditClick}
                             handleDeleteClick={handleDeleteClick} />
                            )}
                        </Fragment>
                    ))}
                  </tbody>
            </table>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Home