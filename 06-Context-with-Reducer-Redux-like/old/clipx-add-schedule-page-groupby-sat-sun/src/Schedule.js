import React, { useContext } from 'react';

import { Header } from './Header';
import { Menu } from './Menu';

import { GlobalContext } from './GlobalState';

const Schedule = ({}) => {
  
  
  //const { isLoading, speakerList } = useSpeakerDataManager();
  
  const { isLoading, speakerList } = useContext(
    GlobalContext,
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <Menu />
      <div className="container-fluid mt-3">
        {['sat', 'sun'].map(function (day) {
          return (
            <div className="row mx-auto">
              <div className="col-sm-5">
                <div className="card">
                  <div className="card-header">
                    <h2>{day === 'sat' ? 'Saturday' : 'Sunday'} Speakers</h2>
                  </div>
                  <ul className="mt-3 mr-4">
                    {speakerList
                      .filter(function(rec) {
                        if (rec.sat === true && day === "sat") return true;
                        if (rec.sun === true && day === "sun") return true;
                      })
                      .map((speakerRec) => {
                        return (
                          <li className="list-group-item" key={speakerRec.id}>
                            <h3>{`${speakerRec.firstName} ${speakerRec.lastName} ${speakerRec.sat}`}</h3>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;
