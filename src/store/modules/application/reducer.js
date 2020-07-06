import { produce } from 'immer';

const INITIAL_STATE = {
  states: [],
  country: [],
  brazil: [],
  world: [],
  states_date: '',
  loading: 0,
  countrySearchInput: '',
  citySearchInput: '',
};

export default function application(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@application/COUNTRY_REQUEST': {
        draft.loading = 1;
        break;
      }
      case '@application/COUNTRY_SUCCESS': {
        draft.country = action.payload.data;
        draft.loading = 0;
        break;
      }
      case '@application/BRAZIL_REQUEST': {
        draft.loading = 1;
        break;
      }
      case '@application/BRAZIL_SUCCESS': {
        draft.brazil = action.payload.data.brazil;
        draft.states_date = action.payload.data.states_date;
        draft.loading = 0;
        break;
      }
      case '@application/SET_COUNTRY_INPUT': {
        draft.countrySearchInput = action.payload.countrySearchInput;
        break;
      }
      case '@application/SET_CITY_INPUT': {
        draft.citySearchInput = action.payload.citySearchInput;
        break;
      }
      case '@application/WORLD_REQUEST': {
        draft.loading = 1;
        break;
      }
      case '@application/WORLD_SUCCESS': {
        draft.world = action.payload.data;
        draft.loading = 0;
        break;
      }
      default:
    }
  });
}
