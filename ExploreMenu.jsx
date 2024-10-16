import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category, setCategory}) => {
   return (
      <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Embark on a culinary adventure! Our menu is a delightful journey through flavors, featuring a wide array of dishes to satisfy every craving. From mouthwatering appetizers to delectable desserts, each item is crafted with the finest ingredients and a passion for taste. Browse our thoughtfully curated categories, discover new favorites, and let your taste buds guide you. Whether you are in the mood for comforting classics or adventurous new tastes, your perfect meal awaits. Dive in and explore today!</p>
      <div className="explore-menu-list">
         {menu_list.map((item,index)=>{
            return (
               <div onClick={()=> setCategory(prev=>prev===item.menu_name? "ALL":item.menu_name)} key= {index} className="explore-menu-list-item">
                  <img className={category===item.menu_name? "active": " "} src={item.menu_image} alt="" />
                  <p>{item.menu_name}</p>
               </div>
            )
         })}
      </div>
      <hr />
      </div>
   )
}
export default ExploreMenu
