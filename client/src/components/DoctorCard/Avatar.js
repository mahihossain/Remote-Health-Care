import React, { useState, useEffect } from 'react'
import '../Profile/Profile.css'
import axios from 'axios'

export default function Avatar(path) {
    const [newPath, setNewPath] = useState('')

    useEffect(() => {
        if(path.path) {
            return setNewPath(path.path.replace(/^'(.*)'$/, '$1'))
        }

        setNewPath(path)

    }, [path])
    
    


    return (
        <div className='avatar'>
            <img src={`/image/${newPath}`} alt=""/>
        </div>
    )
}
                                        