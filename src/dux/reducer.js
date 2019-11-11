const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  image: "",
  mortgage: 0,
  rent: 0
};

export const STEP_ONE = "STEP_ONE";
export const STEP_TWO = "STEP_TWO";
export const STEP_THREE = "STEP_THREE";
export const CLEAR = "CLEAR";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STEP_ONE:
      return { ...state, ...action.payload };
    case STEP_TWO:
      return { ...state, ...action.payload };
    case STEP_THREE:
      return { ...state, ...action.payload };
    case CLEAR:
      return { ...initialState };
    default:
      return state;
  }
}

export function stepOne(name, address, city, state, zip) {
  return {
    type: STEP_ONE,
    payload: {
      name,
      address,
      city,
      state,
      zip
    }
  };
}

export function stepTwo(image) {
  return {
    type: STEP_TWO,
    payload: { image }
  };
}

export function stepThree(mortgage, rent) {
  return {
    type: STEP_THREE,
    payload: {
      mortgage,
      rent
    }
  };
}

export function clear() {
  return {
    type: CLEAR,
    payload: initialState
  };
}
