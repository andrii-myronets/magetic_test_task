import { server } from "../../API";
import { setCards } from "./actions";

export const getCards = (dataClick) => async (dispatch) => {
    try {
        const { status, data } = await server(`/v3/${dataClick}`);
        if (status === 200) {
          dispatch(setCards(data));
        }
      } catch (error) {
        console.log(error);
      }
};