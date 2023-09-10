import React, { useState } from 'react';
import ScrollableFeed from 'react-scrollable-feed';

const Scroll = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2']);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (

    <>
    

      <ScrollableFeed>
  
   
    <div className="conversation">
          <div className="conversation-container" id="stb" >
            <div className="msms" style={{ width: "100%" }}>
              <div id="ap">


              {items.map((item, i) => (
          <div className="messages sent opc" key={i}>{item}</div>
        ))}


             

           
              </div>
           
            </div>

      

          </div>
   
   
        </div>

        </ScrollableFeed>
        <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter a new item"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
    
    </>
 




  );
};

export default Scroll;
