import React from 'react';
import CardProps from './Card.type';

const Card = ({
    title,
    body,
    footer,
    buttonLabel,
    buttonAction
}: CardProps) => {
  return (
    <>
        <div className='card-body'>{body}</div>
        <div className='card-title'>{title}</div>
        {
            footer &&
            <div className='card-footer'>{footer}</div>
        }
        {
            buttonLabel &&
            <button onClick={buttonAction}>{buttonLabel}</button>
        }
    </>
  )
}

export default Card;
