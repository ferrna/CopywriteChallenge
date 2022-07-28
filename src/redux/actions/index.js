import axios from "axios";
import { FETCH_TEXT_TRANSFORM } from "../consts";

export const getTextTransform = function (text) {
  return async function (dispatch) {
    return await axios(`https://node-express-copywrite.herokuapp.com/iecho?text=${text}`).then((json) =>
      dispatch({ type: FETCH_TEXT_TRANSFORM, payload: json.data })
    );
  };
};
