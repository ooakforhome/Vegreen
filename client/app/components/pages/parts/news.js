import React from 'react';

const NewsList = ({news1, news2, news3}) => (
  <div className="col-12">
    <div className="col-4">
      <div className="iCol-10"><img alt="news_1" src={news1} /></div>
    </div>
    <div className="col-4">
      <div className="iCol-10"><img alt="news_2" src={news2} /></div>
    </div>
    <div className="col-4">
      <div className="iCol-10"><img alt="news_3" src={news3} /></div>
    </div>
  </div>
)

export default NewsList;
