import { FETCH_TEXT_TRANSFORM } from "../consts";
import httpService from "../../services/httpService";
import axios from "axios"

const service = new httpService()

export const getTextTransform = function (text) {
  return async function (dispatch) {
    return await axios(`https://node-express-copywrite.herokuapp.com/iecho?text=${text}`).then((json) =>
      dispatch({ type: FETCH_TEXT_TRANSFORM, payload: json.data })
    );
  };
};
