import {put, takeLatest} from 'redux-saga/effects';
import * as Actions from './actions';

function* watchSetupSaga() {
  yield takeLatest(Actions.SET_CURRENT_COUNTRY, setCountry);
  yield takeLatest(Actions.SET_ACTIVE_LANGUAGE, setLanguage);
}

function* setCountry(action) {
  try {
    yield put({
      type: Actions.SET_CURRENT_COUNTRY,
      currentCountry: action.country,
    });
  } catch (e) {
    yield put({type: Actions.SET_GLOBAL_ERROR, message: e?.message});
  }
}
function* setLanguage(action) {
  try {
    yield put({
      type: Actions.SET_ACTIVE_LANGUAGE,
      activeLanguage: action.activeLanguage,
    });
  } catch (e) {
    yield put({type: Actions.SET_GLOBAL_ERROR, message: e?.message});
  }
}

export default watchSetupSaga;
