import React from 'react';
import Profile from './Profile';

const Roster = ({ rosterArray = [] }) => {
    const profiles = rosterArray.map((profile) => {
        return (
            <Profile
                key={profile.id}
                name={profile.name}
                img={profile.img}
                desc={profile.desc}
            />
        );
    });

    return (
        <div className="Roster">
            <h1>Roster</h1>
            {profiles}
        </div>
    );
};

export default Roster;
