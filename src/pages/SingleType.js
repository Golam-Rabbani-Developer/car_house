import React from 'react';
import { useParams } from 'react-router-dom';

const SingleType = () => {
    const { id } = useParams()
    return (
        <div>
            this is {id}
        </div>
    );
};

export default SingleType;