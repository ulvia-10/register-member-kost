export const ReviewReducer = (state = {}, action) => {
  
  switch (action.type) {
    case "LIST_REVIEW":
      return{
        ...state, 
        listReview : action.payload
      }
    
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

      case "DELETE_REVIEW":
        const deleteReview = state.filter((review) =>
          review.id === action.payload 
          ? null 
          : review
        )
        state = deleteReview
        return state;

      default:
      return state;
  }
};
