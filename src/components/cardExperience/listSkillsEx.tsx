'use client'

import React from 'react'

interface typeContent {
    title: string,
    skills: string
}

const listSkillsEx = ({ title, skills }: typeContent) => {
    return (
        <div className='card_list-skills'>
            <h5>{title}</h5>
            <p>{skills}</p>
        </div>
    )
}

export default listSkillsEx