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
        />
        <input
            placeholder='Write your Age ...'
            name='age'
        />
        <input
            placeholder='Write your Hobbies ...'
            name='hobbies'
        />
    </div>
  )
}

export default Test