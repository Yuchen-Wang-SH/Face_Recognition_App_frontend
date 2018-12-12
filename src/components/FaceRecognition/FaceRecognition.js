import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
    if (!imageUrl) {
        return null;
    }

    const displayBoxesDiv = [];
    for (const box of boxes) {
        displayBoxesDiv.push(<div key='0' className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>)
    }
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id='inputimage' src={imageUrl} alt="sample" width='500px' height='auto'/>
                {displayBoxesDiv}
            </div>
        </div>
    )
}

export default FaceRecognition;