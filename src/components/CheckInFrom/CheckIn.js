import React, { useState } from 'react';

function CheckInCard() {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const handleChangeInput = (e) => {
    console.log(e.target.name, e.target.value)
    setFormState({ ...formState, [e.target.name]: e.target.value });
    };
    const handleSumbit = () => {
    setLoading(true)

    setTimeout(() => {
        setLoading(false)
        alert('Welcome to Keep-Off')
    }, 2000);
    }
    return (
    <div className='card-container'>
        <h2>Registro</h2>
        <fieldset className='input-container'>
            <label className='input-label'>User</label>
            <input className='input-field' name='username' onChange={(e) => handleChangeInput(e)} />
        </fieldset>
        <fieldset className='input-container'>
            <label className='input-label'>Email</label>
            <input className='input-field' name='email' type='email' onChange={(e) => handleChangeInput(e)} />
        </fieldset>
        <fieldset className='input-container'>
            <label className='input-label'>Password</label>
            <input className='input-field' name='password' type='password' onChange={(e) => handleChangeInput(e)} />
        </fieldset>
        <button className='button-register' onClick={() => handleSumbit()}>{loading? 'Loading' : 'Become a Keep-Off Member'}</button>
    </div>
    )
}

export default CheckInCard;