import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
      <h1>Maker</h1>
      <Footer />
    </section>
  );
};

export default Maker;
