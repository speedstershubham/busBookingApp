import './App.css'
import AppRoute from './router/AppRoute'
import { Provider } from 'jotai'
const App: React.FC = () => {
    return (
        <div className="App">
            <Provider>
                <AppRoute />
            </Provider>
        </div>
    )
}

export default App
