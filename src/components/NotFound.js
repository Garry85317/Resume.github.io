import React from 'react'

function NotFound() {
    return (
        <div className='notfound'>
            <div className="notfound_content">
                <h1>4 0 4</h1>
                <h2>This page does not exist now</h2>
            </div>
            <img src={process.env.PUBLIC_URL + "/IMG/404page.jpg"} alt="" />
        </div>
    )
}

export default NotFound