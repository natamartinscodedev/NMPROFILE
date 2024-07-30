'use client'
import React from 'react'

interface typeSkill {
    name: string,
    style: boolean,
}

const index = ({ name, style }: typeSkill) => {
    return (
        <div className='animation_on'>
            {
                style ?
                    (<p className='animation_skills-true'>{name}</p>)
                    :
                    (<p className='animation_skills-false'>{name}</p>)
            }
        </div>
    )
}

export default index