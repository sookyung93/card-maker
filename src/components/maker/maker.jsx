import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import CardPreview from '../card_preview/card_preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Bomi',
      company: 'Apink',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'bomi@gmail.com',
      message: 'Hello',
      fileName: 'Bomi',
      fileURL: 'images/BOMI.jpg',
    },
  });

  const historyState = useHistory().state;
  const [userId, setUserId] = useState(historyState && historyState.id);

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    //unmount가 되었을 때, 컴포넌트가 더 이상 보여지지 않을 때
    //마무리 하고 싶으면 return 사용
    //unmonut가 되면 리액트가 자동으로 return의 함수 호출
    //리소스나 메모리 정리 가능
    return () => stopSync();
  }, [userId]);

  useEffect(() => {
    authService.onAuthChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });
  });

  const addOrChangeCard = (card) => {
    setCards((cards) => {
      const changed = { ...cards, [card.id]: card };
      return changed;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const deleted = { ...cards };
      delete deleted[card.id];
      return deleted;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addNewCard={addOrChangeCard}
          deleteCard={deleteCard}
          changeCard={addOrChangeCard}
        />
        <CardPreview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
