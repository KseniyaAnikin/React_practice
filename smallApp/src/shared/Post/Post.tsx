import React from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom';

export function Post() {
  const node =document.querySelector('#modal_root');
  if(!node) return null;

  return ReactDOM.createPortal(
    (<div className={styles.modal}>
      <h2>Title</h2>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi reiciendis ducimus dolor aspernatur aut ipsum fuga ipsam! Quisquam aliquid dolore natus quos fuga voluptas, cumque ea id quas facere? Saepe.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi reiciendis ducimus dolor aspernatur aut ipsum fuga ipsam! Quisquam aliquid dolore natus quos fuga voluptas, cumque ea id quas facere? Saepe.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi reiciendis ducimus dolor aspernatur aut ipsum fuga ipsam! Quisquam aliquid dolore natus quos fuga voluptas, cumque ea id quas facere? Saepe.</p>
      </div>
    </div>
    ), node);  
}
