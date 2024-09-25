import React from 'react'
import "./Test.css"

const Test = () => {


    const getInputs = ( value ) =>{
        console.log(value);
        
    }; 



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
        <button>Submit</button>
    </div>
  )
}

export default Test