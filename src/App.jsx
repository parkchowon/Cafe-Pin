import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './components/common/Globalstyle/';
import router from './routes/Router';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
