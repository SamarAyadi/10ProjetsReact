import React, {useRef, useState, useContext} from 'react'
import './AuthForm.css'
import {useSelector, useDispatch} from 'react-redux'
import {AuthContext} from '../../context/AuthContext'
import {useHistory} from 'react-router-dom'

export default function SignIn() {

    const [error, setError] = useState('');
    const history = useHistory()
    const {login} = useContext(AuthContext)

    const showModal = useSelector(state => state)

    async function handleSubmit(e){
        e.preventDefault();

        try{
            await login(inputs.current[0].value, inputs.current[1].value);
            history.push('/loggedHome')
            closeModal()
        } catch {
            setError('Email ou mot de passe incorrect.')
        }
    }

    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch({
            type: "CLOSEMODAL"
        })
    }

    const toggleSignUp = () => {
        dispatch({
            type: "TOGGLEUP"
        })
    }

    const inputs = useRef([])

    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }

    return (
        <div className={showModal.showSignIn ? "global-modal" : "hide-modal"}>
            <div 
            onClick={closeModal}
            className="overlay"></div>
            
            <div className="container-modal">
                <form
                onSubmit={handleSubmit}
                className="form-auth">

                    <h2>CONNEXION</h2>
                    <label htmlFor="mail">Votre mail</label>
                    <input type="email" ref={addInputs} htmlFor="mail" required />

                    <label htmlFor="psw">Votre mot de passe</label>
                    <input type="password" ref={addInputs}  id="psw" required/>
                    {error}
                    <button className="btn-sign">Se connecter</button>
                </form>
                <button 
                onClick={closeModal}
                className="btn-close">X</button>
                <p 
                onClick={toggleSignUp}
                className="bottom-help-txt">
                    Besoin de créer un compte ?
                </p>
            </div>
        </div>
    )
}
