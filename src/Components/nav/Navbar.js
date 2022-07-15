import axios from 'axios'
import React, {useState, useEffect} from 'react'
import css from './main.module.css'
import { API, KEY, APISEARCH } from '../../config'

export default function Navbar(props) {

  const [inpVal, setInpVal] = useState('')

  const searchBtn = () => {
    axios.get(APISEARCH + inpVal + KEY)
    .then((response) => {
      console.log(response.data.items)
      props.setData(response.data.items)
    })
  }

  const inpValue = (e) => {
    setInpVal(e)
    console.log(e)
  }

  return (
    <div>
      <nav>
        <div className={css.ss}>
          <a href={'#'} className={css.navLogo}>
            <img className={css.imgLogo} src={'https://freepngimg.com/thumb/youtube/24731-6-youtube-play-button-free-download-thumb.png'} />
            <h3>
              YouTube
            </h3>
          </a>
        </div>
        <div className={css.ss}>
          <div className={css.navSearch}>
            <input onChange={(e) => inpValue(e.target.value)} placeholder={'Введите запрос'} className={css.searchInp} type={'text'} />
            <button onClick={() => searchBtn()} className={css.searchBtn}>
              <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1200px-Vector_search_icon.svg.png'} />
            </button>
          </div>
        </div>
        <div className={css.ss}>
            <a className={css.aUser} href={'#'}>
            <div className={css.navUser}>
              <span>
                <img className={css.imgUser} src={'https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png'} />
              </span>
            </div>
            </a>
        </div>
      </nav>
    </div>
  )
}
