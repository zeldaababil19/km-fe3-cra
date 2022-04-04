import React from 'react';
import Body from '../components/body/Body';
import Footer from '../components/layouts/footer/Footer';
import Header from '../components/layouts/header/Header';

export default function Pages() {
  return (
    <div className="pages">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
