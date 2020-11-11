import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CardMaker from '../card_maker/card_maker';
import CardPreview from '../card_preview/card_preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = (props) => {
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
        <div className={styles.card_maker}>
          <CardMaker />
        </div>
        <div className={styles.card_preview}>
          <CardPreview />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
