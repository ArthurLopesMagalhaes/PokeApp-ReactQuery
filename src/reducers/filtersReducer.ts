export enum ActionKind {
  SET_TYPE = "SET_TYPE",
  SET_WEAKNESSES = "SET_WEAKNESSES",
  SET_HEIGHT = "SET_HEIGHT",
  SET_WEIGHT = "SET_WEIGHT",
  REMOVE_TYPE = "REMOVE_TYPE",
  REMOVE_WEAKNESSES = "REMOVE_WEAKNESSES",
  REMOVE_HEIGHT = "REMOVE_HEIGHT",
  REMOVE_WEIGHT = "REMOVE_WEIGHT",
}

export type StateType = {
  pokemonType: string[];
  pokemonWeakness: string[];
  pokemonHeight: string[];
  pokemonWeight: string[];
};

export const filtersInitialState: StateType = {
  pokemonType: [],
  pokemonWeakness: [],
  pokemonHeight: [],
  pokemonWeight: [],
};
export type ActionType = {
  type: ActionKind;
  payload: string;
};

export const filtersReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case ActionKind.SET_TYPE:
      return { ...state, pokemonType: [...state.pokemonType, action.payload] };

    case ActionKind.SET_WEAKNESSES:
      return {
        ...state,
        pokemonWeakness: [...state.pokemonWeakness, action.payload],
      };

    case ActionKind.SET_HEIGHT:
      return {
        ...state,
        pokemonHeight: [...state.pokemonHeight, action.payload],
      };

    case ActionKind.SET_WEIGHT:
      return {
        ...state,
        pokemonWeight: [...state.pokemonWeight, action.payload],
      };

    case ActionKind.REMOVE_TYPE:
      return {
        ...state,
        pokemonType: state.pokemonType.filter(
          (item) => action.payload !== item
        ),
      };

    case ActionKind.REMOVE_WEAKNESSES:
      return {
        ...state,
        pokemonWeakness: state.pokemonWeakness.filter(
          (item) => action.payload !== item
        ),
      };

    case ActionKind.REMOVE_HEIGHT:
      return {
        ...state,
        pokemonHeight: state.pokemonHeight.filter(
          (item) => action.payload !== item
        ),
      };

    case ActionKind.REMOVE_WEIGHT:
      return {
        ...state,
        pokemonWeight: state.pokemonWeight.filter(
          (item) => action.payload !== item
        ),
      };

    default:
      return state;
  }
};
