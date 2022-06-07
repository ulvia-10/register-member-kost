const globalState = [
  {
    id: 1,
    nama: "Ulvia Yulianti",
    email: "ulvia.yulianti@gmail.com",
    noTelp: "081537283273",
    alamat: "Malang Jawa Timur",
    tanggal: "06/06/2022"
  },
  {
    id: 2,
    nama: "Randi",
    email: "randiAnfi@gmail.com",
    noTelp: "08153728322983",
    alamat: "DKI Jakarta Timur",
    tanggal: "06/06/2022"
  },
];

export const MemberReducer = (state = globalState, action) => {
  switch (action.type) {
    case "ADD_MEMBER":
      state = [...state, action.payload];
      return state;

      //logic untuk menghapus apakah data.id? data.id kalau tidak: akan terhapus
    case "DELETE_MEMBER":
      const memberFilter = state.filter((member) =>
        member.id === action.payload ? null : member
      );
      state = memberFilter;
      return state;

      //logic untuk mereset meber 
    case "RESET_MEMBER":
      state = [{ nama: null, email: null, noTelp: null, alamat: null }];
      return state;

    case "UPDATE_MEMBER":
      const memberUpdate = state.filter((member) =>
        member.id === action.payload.id
          ? Object.assign(member, action.payload)
          : member
      );
      state = memberUpdate;
      return state;

    default:
      return state;
  }
};
