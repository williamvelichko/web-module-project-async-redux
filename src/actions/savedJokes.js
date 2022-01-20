export const SAVE_JOKE = "SAVE_JOKE";
export const DELETE_JOKE = "DELETE_JOKE";

export const saveJoke = (id) => {
  return { type: SAVE_JOKE, payload: id };
};
