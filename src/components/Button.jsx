import React from 'react'

export default function Button(props) {
    const { text, func } = props
    return (
        <button onClick={func} className='px-8 mx-auto py-4 rounded-md border-[2px] bg-slate-950 border-batman-yellow-100 border-solid yellowShadow duration-200'>
            <p>{text}</p>
        </button>
    )
}