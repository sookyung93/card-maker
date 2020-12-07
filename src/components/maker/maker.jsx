import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import CardPreview from '../card_preview/card_preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const [cards, setCards] = useState({});

  const historyState = useHistory().state;
  const [userId, setUserId] = useState(historyState && historyState.id);

  const history = useHistory();
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]); //useCallback을 사용한다는 것은 state, props가 변경 되어도 우리가
  //한 번 만든 함 수를 계속 재사용 하겠다는 것.
  //즉, authService를 받아오는데, authService가 변경되어도 처음에 정의된
  //함수를 계속 사용 한다는 의미
  //따라서 디펜던시로 authService를 전달해서, authService가 변경되면 함수를 다시 호출하도록 한다

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
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });
  }, [authService, userId, history]); //불필요하게 계속 등록 하지 않고 업데이트 될 때만 호출되로록 디펜던시 작성

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
