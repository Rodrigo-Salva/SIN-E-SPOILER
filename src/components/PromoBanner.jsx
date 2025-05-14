import React from 'react';

const PromoBanner = ({ promo }) => {
  return (
    <div className="promo-banner">
      <div className="promo-banner__content">
        <h3>{promo.title}</h3>
        <p>{promo.description}</p>
        <span className="promo-banner__code">{promo.code}</span>
      </div>
      <img 
        src={promo.image} 
        alt={promo.title}
        className="promo-banner__image"
      />
    </div>
  );
};

export default PromoBanner;
