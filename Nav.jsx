import React from 'react'
import st from './Nav.module.css'

const Nav = () => {
  return (
    <div className={st.nav}>
    <img className={st.netlogo} src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" alt="" />

    <div className={st.list}>Homepage</div>
    <div className={st.list}>Series</div>
    <div className={st.list}>Movies</div>
    <div className={st.list}>New</div>
    <div className={st.list}>Popular</div>
    <div className={st.list}>My List</div>

    
    
    </div>
    
  )
}

export default Nav