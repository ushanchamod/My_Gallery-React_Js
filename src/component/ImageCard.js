import React from 'react'

export default function ImageCard(props) {
    return (
        <div className="imageCard">
            {/* <img src={props.original} alt={props.id}/> */}
            <div className="img" style={{backgroundImage: 'url('+ props.original+ ')'}}>
                <div className="imageCardInnerContent">
                    <a href={props.original} target="blank">
                        <button>Go to Image</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
