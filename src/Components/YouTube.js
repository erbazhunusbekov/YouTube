import axios from 'axios';
import React, { useState, useEffect } from 'react';
import css from './main.module.css';
import Navbar from './nav/Navbar';
import Side from './side/Side';
import Content from './content/Content';
import { API, KEY } from '../config';

export default function YouTube() {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get(API + KEY)
      .then((response) => {
        console.log(response.data.items)
        setData(response.data.items)
      })
  }, [])



  return (
    <div className={css.body}>
        <Navbar setData={(d) => setData(d)} />
          <div className={css.main}>
            <Side />
            <Content data={data} />
          </div>
    </div>
  )
}
