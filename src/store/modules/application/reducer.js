import { produce } from 'immer';

const INITIAL_STATE = {
  states: [],
  brazil: [],
  world: [],
  loading: false,
};

export default function application(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@application/BRAZIL_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@application/BRAZIL_SUCCESS': {
        draft.states = action.payload.data.states;
        draft.brazil = action.payload.data.brazil;
        draft.loading = false;
        break;
      }
      case '@application/WORLD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@application/WORLD_SUCCESS': {
        draft.world = action.payload.data;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
