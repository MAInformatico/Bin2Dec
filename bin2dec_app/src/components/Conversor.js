import React, {useState} from 'react';
import {binaryToDecimal} from  './tools';
import './Conversor.css'

export default function(){
    const [bin, setBin] = useState();
    const [dec, setDec] = useState();
    function handleBinary(e){
        let value = e.target.value.trim();
        value = value.replace(/[^0-1]/g, '');
        setBin(value);
        let result = binaryToDecimal(value);
        setDec(isNaN(result) ? '' : result);
    }
    return(
        <div className='App'>
                <fieldset>
                    <input type="text" id="bin" value={bin} placeholder="Binary" onChange={handleBinary} 
                    />
                    <input type="text" id="dec" value={dec} placeholder="Decimal"
                    />
                </fieldset>
        
        </div>
    );
}