import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "../slice/UserSlice"
import { ProfileSlice } from "../slice/ProfileSlice"
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["valueState"]
}

const rootReducer = combineReducers({
  valueState: ProfileSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    userProfile: persistedReducer,
    middleware: [thunk]
  },
})


export default store