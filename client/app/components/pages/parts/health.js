import React from 'react';

const HealthList = ({health1, health2, health3}) => (
  <div className="col-12">
    <div className="col-4">
      <div className="iCol-10"><img alt="health_1" src={health1} /></div>
    </div>
    <div className="col-4">
      <div className="iCol-10"><img alt="health_2" src={health2} /></div>
    </div>
    <div className="col-4">
      <div className="iCol-10"><img alt="health_3" src={health3} /></div>
    </div>
  </div>
)

export default HealthList;
