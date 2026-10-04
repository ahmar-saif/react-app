import React from 'react';

const UserBlock = ({user}) => {

    const {name, age, skills} = user;

    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            {skills.map((skill) => (
                <div>
                    {skill === "React" ? `${skill} is Frontend Language` : skill}
                </div>
            ))}
        </div>
    );
};

export default UserBlock;