import React from 'react'

export default function Section(props) {
    
    let { section } = props

    return (
        <div>{section.name}</div>
    )

}