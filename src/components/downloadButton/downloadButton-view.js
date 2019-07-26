import React from 'react';

const View = ({ id }) => (
    <iframe
        sandbox="allow-scripts"
        title="download button"
        style={{
            width: '100%',
            minWidth: '200px',
            maxWidth: '350px',
            height: '64px',
            border: 0,
            overflow: 'hidden',
        }}
        src={`https://break.tv/widget/button/?link=https://www.youtube.com/watch?v=${id}&color=ff0000&text=fff`}
    />
);

export default View;
