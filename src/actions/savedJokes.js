export const SAVE_JOKE = "SAVE_JOKE";
export const DELETE_JOKE = "DELETE_JOKE";

export const saveJoke = (id) => {
  return { type: SAVE_JOKE, payload: id };
};
export const deleteJoke = (id) => {
  return { type: DELETE_JOKE, payload: id };
};
