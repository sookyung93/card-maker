import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardMaker from '../card_maker/card_maker';
import CardPreview from '../card_preview/card_preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = (props) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Bomi',
      company: 'Apink',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'bomi@gmail.com',
      message: 'Hello',
      fileName: 'bomi',
      fileURL: '/images/BOMI.jpg',
    },
    {
      id: '2',
      name: 'SungGyu',
      company: 'Infinite',
      theme: 'light',
      title: 'Software Engineer',
      email: 'gyu@gmail.com',
      message: 'Hello',
      fileName: 'sunggyu',
      fileURL: '/images/SUNGGYU.jpg',
    },
    {
      id: '3',
      name: 'SooBin',
      company: 'DOOSAN BEARS',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'soobin@gmail.com',
      message: 'Hello',
      fileName: 'soobin',
      fileURL: null,
    },
  ]);

  const history = useHistory();
  const onLogout = () => {
    console.log('logout');
    props.authService.logout();
  };

  useEffect(() => {
    props.authService.onAuthChanged((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <CardMaker />
        <CardPreview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
