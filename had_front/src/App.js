import Login from'./components/Login'
import Menu from './components/Menu';
import Notification from './components/Notification';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';

const App = () => {

  const [ user, setUser ] = useState(null)

  const [ notification, setNotification ] = useState(null)
  const [ notificationType, setNotificationType ] = useState(null)
  
  const notificationHandler = (message, type) => {
    setNotification(message)
    setNotificationType(type)

    setTimeout(() => {
      setNotificationType(null)
      setNotification(null)
    }, 3000)
  }



  const handleLogin = async (credentials) => {
    try {
      //const userObject = await loginService.login(credentials)
      setUser(credentials)
      window.localStorage.setItem('loggedInUser', JSON.stringify(credentials))
      
      notificationHandler(`Logged in successfully as ${credentials.email}`, 'success') 
    }
    catch (exception) {
      notificationHandler(`Log in failed, check username and password entered`, 'error')
    }
  }
  return (
    <div>
      <div class="card">
      <div className='text-center page-header p-2 regular-text-shadow regular-shadow' id='' role='tab'>
          <h3 className='display-4 font-weight-bold mb-0'>
            Health Infromation System
          </h3>
        </div>

      {
          user === null &&
          <Login startLogin={handleLogin}/>
      }
      </div>
      {
           user !== null &&
          <Menu />
      }
    </div>  
  );
}

export default App;
