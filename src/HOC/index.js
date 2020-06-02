import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { send_API_ToLoading } from '../API';
import Loading from './loading';

const _ = (props) => {
    const [loading, setLoading] = useState(true);

 ///Hooks lifecycle method...   
    useEffect(() => {
        setTimeout(() => {
            axios.get(`${send_API_ToLoading}`)
                .then(res => {
                    setLoading(false)
                })
                .catch(error => console.log(error))
        }, 1500)
    }, [])


 //Conditional returning Statement..  
    if (loading) {
       return (
           <div>
               <Loading />
           </div>
       )
    } else {
        return (
            <div>
                {props.children}
            </div>
        )
    }

}

export default _;