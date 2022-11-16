import React from 'react';
import CardProps from './Card.type';
import './Card.css';

const Card = ({
    title,
    body,
    footer,
    buttonLabel,
    buttonAction
}: CardProps) => {
  return (
    <div className='card'>
        <div className='card-title'>
            <h2>{title}</h2>
        </div>
        <div className='card-body'>{body}</div>
        {
            footer &&
            <div className='card-footer'>{footer}</div>
        }
        {
            buttonLabel &&
            <button onClick={buttonAction}>{buttonLabel}</button>
        }
    </div>
  )
}

export default Card;
