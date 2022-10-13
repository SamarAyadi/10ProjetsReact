import React, {useContext} from 'react'
import {Context} from '../../context/langContext'
import './Contenu.css'
import data from '../../assets/data.js'


export default function Contenu() {

    const {lang} = useContext(Context)

  

    return (
        <div className='content'>
            <h1 className="title">{data[lang].title}</h1>
            <p className="content-txt">{data[lang].txt}</p>
        </div>
    )
}
