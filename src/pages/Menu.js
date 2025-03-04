import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { FaPlusCircle } from "react-icons/fa";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Eventos <a href="/form_a"><FaPlusCircle class="addEventIcon" size={45}/></a></h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              link={menuItem.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
