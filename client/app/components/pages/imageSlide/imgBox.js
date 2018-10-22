import React from 'react';


const ImgBox = ({property}) => {
    const { index, picture, picture1, picture2 } = property;
    return (
        <div id={`image-${index}`} className="image">
            <img
              src={picture2}
              alt={index} />
            <div className="details">
                <span className="index">{index+1}</span>
            </div>
        </div>
    )
}



export default ImgBox;
