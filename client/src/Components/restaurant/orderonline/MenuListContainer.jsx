/*import React, { useState } from "react";
import menucategory from "./menucategory";

// components


const MenulistContainer = (props) => {
  return (
    <>
      <div className="w-full flex flex-col gap-3">
        <menucategory
          name={props.name}
          items={props.items}
          onClickHandler={props.onClickHandler}
          isActive={props.selected === props.name}
        />
      </div>
    </>
  );
};

export default MenulistContainer;*/

import React, { useState } from "react";

// components
import MenuCategory from "./MenuCategory";

const MenuListContainer = (props) => {
  return (
    <>
      <div className="w-full flex flex-col gap-3">
        <MenuCategory
          name={props.name}
          items={props.items}
          onClickHandler={props.onClickHandler}
          isActive={props.selected === props.name}
        />
      </div>
    </>
  );
};

export default MenuListContainer;


