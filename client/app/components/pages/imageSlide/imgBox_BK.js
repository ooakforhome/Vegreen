import React from 'react';


const ImgBox = ({property}) => {
    const { index, picture, picture2 } = property;
    return (
      <div>
        <div id={`image-${index}`} className="image">
            <img
              srcset={` ${picture2} 720w, ${picture} 1280w`}
              sizes="(max-width: 1280px) 1280px, (max-width: 720px) 720px"
              src={picture}
              alt={index} />
            <div className="details">
                <span className="index">{index+1}</span>
            </div>
        </div>
      </div>
    )
}



export default ImgBox;
