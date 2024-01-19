import {all} from 'redux-saga/effects';

import watchSetupSaga from 'features/setup/saga';

export default function* () {
  yield all([watchSetupSaga()]);
}
