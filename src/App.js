import './App.css';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom'

import ErrorPage from './Pages/ErrorPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import LibraryRoot from './Pages/Librarian/Root';
import BooksCatalog from './Pages/Librarian/BooksCatalog';
import BookRecord from './Pages/Librarian/BooksRecord';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/login' />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signin',
    element: <Register />
  },
  {
    path: '/librarian-dashboard',
    element: <LibraryRoot />,
    children: [
      {
        path: '/librarian-dashboard/catalog',
        element: <BooksCatalog />,
      },
      {
        path: '/librarian-dashboard/record',
        element: <BookRecord />
      }
    ]
  },
  {
    path: '/student-dashboard',
    element: <div>Catalogo de libros</div>
  },
  {
    path: '/admin-dashboard',
    element: <div>Catalogo de usuarios</div>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
