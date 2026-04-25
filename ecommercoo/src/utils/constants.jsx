import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Crafting furniture that merges timeless design with modern comfort. We strive to create pieces that transform houses into homes you never want to leave.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'To be the leading innovator in sustainable home furnishings, inspiring beautiful and comfortable living spaces across the globe.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Founded with a passion for woodworking and design, we have grown from a small local workshop to a trusted brand, always maintaining our commitment to quality craftsmanship.',
  },
];

export const products_url = 'https://www.course-api.com/react-store-products';

export const single_product_url = `https://www.course-api.com/react-store-single-product?id=`;
