import {call, put, takeLatest} from 'redux-saga/effects';
import {signup, signin} from './api';
import {
  signupSuccess,
  signupFailure,
  signinSuccess,
  signinFailure,
} from './actions';
import {SignupAction, SigninAction, ActionTypes} from './types';

function* handleSignup(action: SignupAction) {
  try {
    const {username, password} = action.payload;
    const response = yield call(signup, username, password);
    yield put(signupSuccess(response.data));
  } catch (error) {
    yield put(signupFailure(error.message));
  }
}

function* handleSignin(action: SigninAction) {
  try {
    const {username, password} = action.payload;
    const response = yield call(signin, username, password);
    yield put(signinSuccess(response.data));
  } catch (error) {
    yield put(signinFailure(error.message));
  }
}

function* preloginSaga() {
  yield takeLatest(ActionTypes.SIGNUP_REQUEST, handleSignup);
  yield takeLatest(ActionTypes.SIGNIN_REQUEST, handleSignin);
}

export default preloginSaga;
