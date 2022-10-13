import React, {createContext, useState} from 'react' 

export const Context = createContext();

const supportedLangs = ['EN', 'FR', 'ES'];

let browserLang = navigator.language.slice(0,2).toUpperCase();

if(supportedLangs.indexOf(browserLang) === -1){
    browserLang = "EN";
}

const ContextProvider = props => {

    const [lang, setLang] = useState(browserLang)

    const toggleLang = changeLang => {
        setLang(changeLang)
    }

    return (
        <Context.Provider value={{lang, toggleLang}}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider;