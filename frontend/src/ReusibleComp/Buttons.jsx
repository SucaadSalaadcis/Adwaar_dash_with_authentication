import i18n from 'i18next';
import React from 'react'

export default function Buttons() {
    return (
        <div className='pl-3'>
            <button className="bg-blue-900 text-white w-20 rounded-md h-8 "
                onClick={() => {
                    i18n.changeLanguage("en");
                }}
            >english</button>
            <button className="bg-yellow-600 text-white w-20 rounded-md h-8 mt-4 ml-2"
                onClick={() => {
                    i18n.changeLanguage("so");
                }}
            >Somali</button>
        </div >
    )
}
