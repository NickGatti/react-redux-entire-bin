const initialState = [
  {
    name: "Filtered Water",
    priceInCents: 500000
  },
  {
    name: "Cold Air",
    price: 1000000000
  },
  {
    name: "Edible Grains",
    price: 300000
  },
  {
    name: "Edible Protiens",
    price: 750000
  }
];

export const addItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return state.concat(action.payload)
        default:
            return state
    }
}