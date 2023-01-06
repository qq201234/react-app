import CounterTwo from './CounterTwo/CounterTwo'
import User from './User/User'

import { store } from './store'
import { Provider } from 'react-redux'

export function DemoApp() {
  return (
    <>
      <Provider store={store}>
        <h1>ex4-redux</h1>
        <CounterTwo />
        <User />
      </Provider>
    </>
  )
}
