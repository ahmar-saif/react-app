import React, {useEffect, useState} from 'react';

const Form = () => {

    const [name, setName] = useState();

    useEffect(() => {
        console.log(`Name has been changed to ${name}`)
    }, [name]);

    return (
        <div>
            <label>Name: </label>
            <input
                placeholder='Name'
                className='border border-white'
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
};

export default Form;