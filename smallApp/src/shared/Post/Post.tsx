import React, { useEffect, useRef } from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom';
import { useCommentData } from '../../hooks/useCommentData';

interface IPost{
  onClose?: ()=>void;
  id: number,
}

export function Post( { onClose, id }: IPost) {
  const ref = useRef<HTMLDivElement>(null);

  const [data] = useCommentData(id);

  useEffect(()=>{
    function handleClick(event: MouseEvent){
      if(event.target instanceof Node && !ref.current?.contains(event.target)){
        onClose?.();
      }
    }
    document.addEventListener('click', handleClick );
    return ()=>{
      document.removeEventListener('click', handleClick );
    }
  }, []);

  const node =document.querySelector('#modal_root');
  if(!node) return null;

  return ReactDOM.createPortal(
    (<div className={styles.modal} ref={ref}>
      <h2>Title</h2>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi reiciendis ducimus dolor aspernatur aut ipsum fuga ipsam! Quisquam aliquid dolore natus quos fuga voluptas, cumque ea id quas facere? Saepe.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi reiciendis ducimus dolor aspernatur aut ipsum fuga ipsam! Quisquam aliquid dolore natus quos fuga voluptas, cumque ea id quas facere? Saepe.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi reiciendis ducimus dolor aspernatur aut ipsum fuga ipsam! Quisquam aliquid dolore natus quos fuga voluptas, cumque ea id quas facere? Saepe.</p>
      </div>
    </div>
    ), node);  
}
