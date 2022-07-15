import React, { useState } from 'react'
import css from './main.module.css'

export default function Side() {

  const [box, setBox] = useState(['Главная', 'Главная', 'Главная', 'Главная', 'Главная', 'Главная', 'Главная', 'Главная', 'Главная', 'Главная',])

  return (
    <div className={css.side}>
      { box.map((v) => {
        return <div className={css.item}> { v } </div>
      })}
    </div>
  )
}
