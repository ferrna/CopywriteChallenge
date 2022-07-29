import { FETCH_TEXT_TRANSFORM } from "../consts";
import httpService from "../../services/httpService";

const service = new httpService()

export const getTextTransform = function (text) {
  return async function (dispatch) {
    return await service.get(`iecho?text=${text}`).then((json) =>
      dispatch({ type: FETCH_TEXT_TRANSFORM, payload: json.data })
    );
  };
};

export const getTestsStore = function (text) {
  return function (dispatch) {
    return dispatch({ type: 'test_store', payload: text })
  };
};
