import React, { useContext, useEffect, useRef, useState } from 'react';
import { postsContext } from '../context/postsContext';
import { Card } from './Card/Card';
import styles from './cardslist.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reduser';
const prev = require('../../assets/prev.jpg').default;
const ava = require('../../assets/ava.jpg').default;

export function CardsList() {
  // const  data  = useContext(postsContext);
  // let list = data.map(el => {
  //   return <Card num={el.id} rating={el.rating} dataPostUtc={el.dataPostUtc} avatar={el.avatar} img={el.previewImg} key={el.id} author={el.author} title={el.title} />
  // })
  // return (
  //   <ul className={styles.cardslist}>
  //     {list} 
  //   </ul>
  // );
  const token = useSelector<RootState>(state => state.token);
  const [ posts, setPosts ] = useState<any[]>([]);
  const [ loading, setLoading ] = useState(false);
  const [ errorLoading, setErrorLoading ] = useState('');
  const bottomOfList = useRef<HTMLDivElement>(null);
  const [ nextAfter, setNextAfter ] = useState('');
  const [ loadCount, setLoadCount ] = useState(0);
  const loadBtn = useRef<HTMLButtonElement>(null);

 

  useEffect(() => {
    async function load() {
      setLoading(true);
      setErrorLoading('');
      try {
        const {data: {data : { after, children }}} = await axios.get('https://oauth.reddit.com/rising', {
            headers: { Authorization: `bearer ${token}`},
            params: {
              limit: 10,
              after: nextAfter,
            }
          });
          console.log(children,'children')
        setPosts( prevChildren => prevChildren.concat(...children));
        setNextAfter(after);
      } catch (error) {
        setErrorLoading(String(error));
      }
      setLoading(false);
    } 

    const observer = new IntersectionObserver((entries)=>{
      
      if(entries[0].isIntersecting){
        if(loadCount >=2){
          setLoadCount(1);
          console.log(loadCount, 'loadCount after if loadCount >2');
          if(loadBtn.current){
            loadBtn.current.onclick=function() { load() };
          }
        }else{ 
          load();
          setLoadCount(loadCount+1);
          console.log(loadCount, 'loadCount < 2')
        }  
      }
    },{
      rootMargin:'10px',
    });
    if(bottomOfList.current){
      observer.observe(bottomOfList.current);
    }

    return ()=> {
      if(bottomOfList.current){
        observer.unobserve(bottomOfList.current);
      }
    }
  }, [ bottomOfList.current, nextAfter, token ])

  return (
      <ul className={styles.cardslist}>
        { token ==='undefined' &&  (
          <div style={ {textAlign: 'center', padding: '50px'}}>
            Для просмотра ленты необходимо авторизироваться
          </div>
        )}
        { posts.length === 0 && !loading && !errorLoading &&  (
          <div style={ {textAlign: 'center'}}>
            Нет ни одного поста
          </div>
        )}
        { posts.map(post => (
          <Card
          key = { post.data.id }
          title = { post.data.title }
          author = { post.data.author }
          img = {post.data.preview
            ? post.data.preview.images?.[0].source.url.replace(
              /(\&amp\;)/g,
              "&"
            )
            : prev}
          avatar = { ava }
          dataPostUtc = { post.data.dataPostUtc }
          rating = { post.data.ups }
          num = {post.data.id}/>
        ))}
        <button ref={loadBtn} style={{margin:'auto'}}>Загрузить ещё</button>
        <div ref={bottomOfList}/>
        { loading && (
          <div style={ {textAlign: 'center'}}>
            Loading...
          </div>
        )}
        { token !=='undefined' && errorLoading && (
          <div role='alert' style={ {textAlign: 'center'}}>
            {errorLoading}
          </div>
        )}
      </ul>
    );
}
