import { CHOISE_CHAIR, GET_LIST_CHAIR } from "../constant/cinema.constant";

const initailState = {
  list_chair: []
};

export const BookingMovie = (state = initailState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST_CHAIR: {
      state.list_chair = payload;
      return { ...state };
    }
    case CHOISE_CHAIR: {
      let { list_chair } = state;
      let DS = list_chair.danhSachGhe;
      let index = DS?.findIndex((Ghe) => Ghe.maGhe === payload.maGhe);
      if (index !== -1) {
        let chairOld = DS[index];
        let chairNew = { ...chairOld, onPick: !chairOld.onPick };
        DS[index] = chairNew;
        state.list_chair.danhSachGhe = [...DS];
        console.log(DS[index].onPick);
      }
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
