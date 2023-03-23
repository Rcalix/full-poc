import React from 'react';

interface DescriptionType {
    text: string
}
const Description: React.FC<DescriptionType> = ({text}) => {
    return (
        <div>
            {text}
        </div>
    )
}

export default Description;