import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
} from 'react';

import { Header } from './Header';
import { Menu } from './Menu';
import useSpeakerDataManager from './useSpeakerDataManager';

const Schedule = ({}) => {
  const { isLoading, speakerList } = useSpeakerDataManager();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <Menu />
      <div className="container-fluid mt-3">
        <div className="row mx-auto" >
          <div className="col-sm-5 offset-1 ">
            <div className="card">
              <div className="card-header">Saturday Speakers</div>
              <ul className="mt-3 mr-4">
                {speakerList.filter(rec => rec.sat === true).map((speakerRec) => {
                  return (
                    <li className="list-group-item" key={speakerRec.id}>
                      {`${speakerRec.firstName} ${speakerRec.lastName}`}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="card">
              <div className="card-header"><h2>Sunday Speakers</h2></div>
              <ul className="mt-3 mr-4">
                {speakerList.filter(rec => rec.sun === true).map((speakerRec) => {
                  return (
                    <li className="list-group-item" key={speakerRec.id}>
                      <h3>{`${speakerRec.firstName} ${speakerRec.lastName}`}</h3>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Schedule;
