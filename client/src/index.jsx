import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from '@/App'
import '@styles/base.scss'
import reportWebVitals from './reportWebVitals'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
)

reportWebVitals()
