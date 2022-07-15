import React from 'react'
import css from './main.module.css'

export default function Content(props) {
  return (
    <div className={css.content}>
      <div className={css.items}>
        {props.data.map((value) => {
          return (
            <div className={css.videos}>
              <iframe className={css.iframe} src={`https://www.youtube.com/embed/${typeof value.id === 'string' ? value.id : value.id.videoId}`}></iframe>
              <h4 className={css.h4} >{value.snippet.title}</h4>
              <h5 className={css.h5} ><u>CHANNEL</u> : {value.snippet.channelTitle}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}