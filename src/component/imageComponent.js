import React from 'react'

export default function imageComponent(props) {
    return (
        <div className="card">
            <div className="layer"></div>
            <div className="gallery-content">
                <div className="gallery-title">
                    <h4>{props.title}</h4>
                </div>
                <div className="gallery-image">
                    <img src={props.image} alt={props.alt} />
                </div>
            </div>
        </div>
    )
}
