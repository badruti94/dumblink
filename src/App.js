import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotAuthRoute from './outlet/NotAuthRoute';
import PrivateRoute from './outlet/PrivateRoute';
import AddLink from './pages/AddLink';
import EditLink from './pages/EditLink';
import Landing from './pages/Landing';
import Link from './pages/Link';
import MyLink from './pages/MyLink';
import Profile from './pages/Profile';
import Template from './pages/Template';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<NotAuthRoute />} >
          <Route exact path='/' element={<Landing />} />
        </Route>
        <Route exact path='/' element={<PrivateRoute />} >
          <Route exact path='/template' element={<Template />} />
        </Route>
        <Route exact path='/template/:name' element={<AddLink />} />
        <Route exact path='/edit-link/:name/:id' element={<EditLink />} />
        <Route exact path='/link' element={<MyLink />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/link/:uniqid' element={<Link />} />
      </Routes>
    </Router>
  );
}

export default App;
