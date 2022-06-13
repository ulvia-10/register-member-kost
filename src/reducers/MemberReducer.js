export const MemberReducer = (state = {} , action) => {
  
  switch (action.type) {
    case "MEMBER_LIST":
      return {
        ...state,
        listMember: action.payload //state ini biar tidak bertumpuk 
      }

    case "DETAIL_MEMBER":
      return {
        ...state, 
        detailMember: action.payload
      }

    case "ADD_MEMBER":
      state = [...state, action.payload];
      return state;

    //logic untuk menghapus apakah data.id? data.id kalau tidak: akan terhapus
    case "DELETE_MEMBER":
      const memberFilter = state.filter((member) => member.id === action.payload ? null : member  );
      state = memberFilter;
      return state;

    //logic untuk mereset meber
    case "RESET_MEMBER":
      state = { nama: null, email: null, noTelp: null, alamat: null };
      return state;

    case "UPDATE_MEMBER":
      const memberUpdate = state.filter((member) =>
        member.id === action.payload.id ? Object.assign(member, action.payload) : member
      );
      state = memberUpdate;
      return state;

    default:
      return state;
  }
};
