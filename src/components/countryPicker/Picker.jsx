import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './Picker.module.css';
import { fetchDataOption } from '../../API';


const Picker = ({changeHandler}) => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchDataForCountries = async () => {
            setCountries(await fetchDataOption())
        }
        fetchDataForCountries()
    }, [])

    console.log('Picker Data : ', countries)

    return (
        <FormControl className={styles.selectOption}>
            <NativeSelect onChange={(event) => changeHandler(event.target.value)}>
                <option value=''>Global</option>
                {/* { console.log('Piceker',countries) } */}
                {countries.map((selectItem, index) => (<option key={index} value={selectItem}>{selectItem}</option>))}
            </NativeSelect>
        </FormControl>
    )
}

export default Picker;