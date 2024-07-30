'use client'
import React from 'react'

interface typeContent {
    icon: any,
    title: string,
    description: string,

}

const index = ({ icon, title, description }: typeContent) => {
    return (
        <div className='box_card-experience'>
            <span>{icon}</span>
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default index