import React from 'react';
import { Media } from 'reactstrap';

export const Profile = ({
    name = 'Player',
    img = '/assets/images/roster/nutty.png',
    desc = '',
}) => {
    return (
        <Media>
            <Media left>
                {/* <Media object data-src={img} alt={name} /> */}
                <img src={img} alt={name} />
            </Media>
            <Media body>
                <Media heading>{name}</Media>
                {desc}
            </Media>
        </Media>
    );
};

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
