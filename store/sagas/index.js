import { all } from "redux-saga/effects";

import { watchIncrementAsync, incrementAsync2 } from '../sagas/counter'
import { watchAndLog } from '../sagas/log'
import { helloSaga } from '../sagas/hello'

// notice how we now only export the rootSaga
// single entry point to start all Sagas at onceß
export default function* rootSaga() {
  const allSaga = yield all([helloSaga(), /* incrementAsync2(), */watchIncrementAsync(), watchAndLog()]);
  // yield watchIncrementAsync();
  // yield console.log(1);
  // yield console.log(1);
  // yield console.log(1);
  // yield console.log(1);
  // yield console.log(1);
  // yield console.log(1);

  // console.log("all", allSaga);
  console.log("done rootSaga");
}