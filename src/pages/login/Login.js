import React from 'react'
import './login.css'
import ECO from '../../assets/illustration.png' 
import {FiMail} from 'react-icons/fi'
import {BiLockAlt} from 'react-icons/bi'

const style = { fontSize: "1.5rem" }

const Login = () => {
  return (
    <main>
        <div className="login-container">
            <div className="login-img">
                <img src={ECO} alt="eco" />
                <h1>Lorem Ipsum</h1>
            </div>
            <div className="login">
                <form action="">
                    <h1>Prijava na sistem</h1>
                    <small className='text-muted'>Korisnicko ime</small><br />
                    <input type="email" name='email' id='email' placeholder='example@mail.com' required />
                    <span id='icon'>
                    <FiMail style={style}/>
                    </span><br />
                    <small className='text-muted'>Lozinka</small><br />
                    <input type="password" name="password" id="password" placeholder='Your password' required />
                    <span id='icon'>
                    <BiLockAlt style={style} />
                    </span> <br />
                    <div id='box'>
                        <div id='checkbox'>
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <label htmlFor="">Zapamti</label>
                        </div>
                    <a href="#" className='text-decoration-none'>Zaboravili Sifru?</a>
                    </div>
                    <button type='submit' id='btn-login' to="/home">Uloguj Se</button>
                </form>
            </div>
        </div>
    </main>
  )
}

export default Login