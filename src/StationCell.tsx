import React from 'react';

interface StationCellProps {
    numbering: string;
    name: string;
    nameEnglish: string;
}

const StationCell: React.FC<StationCellProps> = ({numbering, name, nameEnglish}) => {
    return (
        <div>
            <p>［HK{numbering}］ {name} {nameEnglish}</p>
        </div>
    );
};

export default StationCell;