import React from 'react';


const ImgBox = ({property}) => {
    const { index, picture, picture2 } = property;
    return (
        <div id={`image-${index}`} className="image">
            <img
              src={picture}
              alt={index} />
            <div className="details">
                <span className="index">{index+1}</span>
            </div>
        </div>
    )
}



export default ImgBox;
