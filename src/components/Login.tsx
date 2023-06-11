import { useState } from "react"

type AuthUser = {
  name :string,
  email:string
}
export const  Login = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
//  const [user, setUser] = useState<AuthUser | null>(null);
    const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => { 
    setIsLoggedIn(true);
    setUser({
      name :'kumaresan',
      email:'kumar@tcs.com'
    })
  };
  const handleLogout = () => { 
    setIsLoggedIn(false);
    setUser({} as AuthUser);
  };

  return (
    <div>
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleLogout}>Log out</button>
      <h2>User Name is {isLoggedIn ? user?.name : 'Loading...'}</h2>
      <h2>User email is {isLoggedIn ? user?.email : 'Loading...'}</h2>
    </div>
  )
}