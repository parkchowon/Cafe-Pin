import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './components/common/Globalstyle/';
import router from './routes/Router';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
