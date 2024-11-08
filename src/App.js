import './App.css';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom'

import AdminRoot from './Pages/Admin/Root';
import ErrorPage from './Pages/ErrorPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import LibraryRoot from './Pages/Librarian/Root';
import BooksCatalog from './Pages/Librarian/BooksCatalog';
import BookRecord from './Pages/Librarian/BooksRecord';
import StudentRoot from './Pages/Student/Root';
import BooksList from './Pages/Student/BooksCatalog';
import UsersCreate from './Pages/Admin/UsersCreate';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    element: <StudentRoot />,
    children: [
      {
        path: '/student-dashboard/books',
        element: <BooksList />
      }
    ]
  },
  {
    path: '/admin-dashboard',
    element: <AdminRoot />,
    children: [
      {
        path: '/admin-dashboard/users',
        element: <UsersCreate />
      }
    ]
  }
])

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
