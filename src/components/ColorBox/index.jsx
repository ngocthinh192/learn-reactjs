import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {

};

function randomColorBox() {
    const colorList = ['green', 'yellow', 'red', 'black'];
    const colorIndex = Math.trunc(Math.random() * 5);

    return colorList[colorIndex];
}

function ColorBox(props) {



    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('color_box_01') || 'blue';

        return initColor
    });

    function handleColorClick() {
        const newColor = randomColorBox();
        setColor(newColor);

        localStorage.setItem('color_box_01', newColor);
    }

    return (

        <div
            style={{ backgroundColor: color }}
            onClick={handleColorClick}
        >
            COLOR BOX
        </div>
    );
}

export default ColorBox;