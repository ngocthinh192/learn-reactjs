import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {

};


function randomColor() {
    const ListColor = ['green', 'yellow', 'red', 'pink'];
    const colorIndex = Math.trunc(Math.random() * 5);

    return ListColor[colorIndex];
}

function ColorBox(props) {



    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('color-box') || 'blue';
        return initColor;
    }
    );

    function handleColorClick() {
        const newColor = randomColor();

        setColor(newColor);

        localStorage.setItem('color-box', newColor);
    }

    return (

        <div
            style={{ backgroundColor: color }}
            onClick={handleColorClick}
        >
            Click To Change Background
        </div>
    );
}

export default ColorBox;