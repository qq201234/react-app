import User from './User/User'

import { store } from './store'
import { Provider } from 'react-redux'

export function DemoApp() {
  return (
    <>
      <Provider store={store}>
        <h1>ex5-redux-async</h1>
        <User />
      </Provider>
    </>
  )
}
