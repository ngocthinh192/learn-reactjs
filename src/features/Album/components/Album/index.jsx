import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

Album.propTypes = {
    Album: PropTypes.object.isRequired,
};

function Album({ album }) {
    return (
        <div className='album_item'>
            <figure>
                <img src={album.thumbnailURL} alt="" />
            </figure>
            <p>{album.name}</p>
        </div>
    );
}

export default Album;