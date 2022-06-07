const reviewState = [
  {
    id: 1,
    nama: "Ulvia Yulianti",
    review: "Kost bersih aman dan nyaman, ibu kostnya ramah ",
  },
  {
    id: 2,
    nama: "Azalia Azzahra",
    review: "Kamar mandi bersih tapi tidak ada dapur",
  },
];

export const ReviewReducer = (state = reviewState, action) => {

  switch (action.type) {
    case "ADD_REVIEW":
      state = [...state, action.payload];
      return state;

    case "UPDATE_REVIEW":
      const editFilter = state.filter((review) =>
        review.id === action.payload.id
          ? Object.assign(review, action.payload)
          : review
      );
      state = editFilter;
      return state;

      default:
      return state;
  }
};
