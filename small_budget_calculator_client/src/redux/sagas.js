import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_BUDGETS, REQUEST_BUDGETS } from './types'
import { showAlert } from './actions/appActions'

export function* sagaWatcher() {
   yield takeEvery(REQUEST_BUDGETS, sagaWorker)
}

function* sagaWorker() {
   try {
       const payload = yield call(fetchBudgets)
       yield put ({ type: FETCH_BUDGETS, payload })
   } catch (e) {
       yield put(showAlert('Something go wrong!'))
   }  
}

async function fetchBudgets() {
   const response = await fetch('http://127.0.0.1:3000/budgets')
   return await response.json()
}