import React from 'react';

const VideoList = ({vid1, vid2, vid3}) => (
  <div className="col-12">
    <div className="col-4">
      <div className="iCol-10">
        <iframe className="youIframe" src={vid1} />
      </div>
    </div>
    <div className="col-4">
      <div className="iCol-10">
        <iframe className="youIframe" src={vid2} />
      </div>
    </div>
    <div className="col-4">
      <div className="iCol-10">
        <iframe className="youIframe" src={vid3} />
      </div>
    </div>
  </div>
)

export default VideoList;
