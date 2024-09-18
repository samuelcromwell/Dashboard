import React from 'react';
import './widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Widget = ({ type }) => {
    let data;

    // Assign different values based on the widget type
    let amount;
    let percentage;

    switch (type) {
        case 'user':
            data = {
                title: 'TOTAL SALES',
                isMoney: false,
            };
            amount = 350; // Unique amount for 'user' type
            percentage = 25; // Unique percentage for 'user' type
            break;
        case 'order':
            data = {
                title: 'ACTIVE USERS',
                isMoney: false,
            };
            amount = 520; // Unique amount for 'order' type
            percentage = 18; // Unique percentage for 'order' type
            break;
        case 'earning':
            data = {
                title: 'MONTHLY REVENUE',
                isMoney: false,
            };
            amount = 78000; // Unique amount for 'earning' type
            percentage = 12; // Unique percentage for 'earning' type
            break;                    
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className="title"> {data.title} </span>
                <span className="counter">{data.isMoney && '$'} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className={`percentage ${percentage > 0 ? 'positive' : 'negative'}`}>
                    <KeyboardArrowUpOutlinedIcon />
                    {percentage}%
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;
