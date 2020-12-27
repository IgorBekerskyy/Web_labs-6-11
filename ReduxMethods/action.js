export const addItem = (item) => {
    return { 
      type: "ADD_RESERVED_ITEM", 
      payload: item
    };
  };

export const updateItem = (item) => {
  return { 
    type: "UPDATE_RESERVED_ITEM", 
    payload: item 
  };
};

export const deleteItem = (item) => {
  return { 
    type: "DELETE_RESERVED_ITEM", 
    payload: item 
  };
};
