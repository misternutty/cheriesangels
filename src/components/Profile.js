import React from 'react';
import { Media } from 'reactstrap';

const Profile = ({
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

export default Profile;
