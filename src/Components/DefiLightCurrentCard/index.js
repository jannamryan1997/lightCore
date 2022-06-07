import {React,useState} from 'react';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

export function DefiLightCurrentCard({element}){
    
    const [openProgress,setOpenProgress] = useState(false);
    const [value, setValue] = useState(70);

    const handleChange = (value) => {
        setValue(value)
    }

    return (
        <></>
    )
}