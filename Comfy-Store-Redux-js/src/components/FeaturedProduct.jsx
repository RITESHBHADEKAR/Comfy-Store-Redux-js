import React from 'react';
import SectionTitle from './SectionTitle';
import ProductsGrid from './ProductsGrid';

const FeaturedProduct = () => {
  return (
    <div className='pt-24'>
      <SectionTitle text='Featured Products' />
      <ProductsGrid />
    </div>
  );
};

export default FeaturedProduct;
