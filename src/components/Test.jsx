import React, { useState } from 'react'
import "./Test.css"

const Test = () => {
    const [objData, setObjData] = useState({})


    const getInputs = ( value, name ) =>{
        let data = {[name]: value}
        setObjData({...objData, ...data})
    }; 

    const submit = () =>{
        console.log(objData);
    }



  return (
    <div className='form'>
        <input
            placeholder='Write your Name ...'
            name='name'
            type='text'
            onChange={(event) => getInputs(event.target.value, event.target.name)}
        />
        <input
            placeholder='Write your Age ...'
            name='age'
            type='age'
            onChange={(event) => getInputs(event.target.value, event.target.name)}
        />
        <input
            placeholder='Write your Hobbies ...'
            name='hobbies'
            type='text'
            onChange={(event) => getInputs(event.target.value, event.target.name)}
        />
        <input
            placeholder='Write a Date ...'
            name='date'
            type='date'
            onChange={(event) => getInputs(event.target.value, event.target.name)}
        />
        <button onClick={submit}>Submit</button>
    </div>
  )
}

export default Test