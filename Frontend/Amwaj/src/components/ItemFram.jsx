import React, { useState } from "react";

const ItemFram = ({ item }) => {
  const [type, setType] = useState();

  return (
    <div className="item">
      <img src={item.imge} alt="" />
      <div className="dec">
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <button>add</button>
      </div>
    </div>
  );
};

export default ItemFram;
