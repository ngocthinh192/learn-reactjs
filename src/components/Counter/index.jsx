import React, { useState } from 'react';
import PropTypes from 'prop-types';

Counter.propTypes = {

};

function Counter(props) {

    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(x => x - 1)}>Decrease</button>
            {count}
            <button onClick={() => setCount(x => x + 1)}>Increse</button>
        </div>
    );
}

export default Counter;