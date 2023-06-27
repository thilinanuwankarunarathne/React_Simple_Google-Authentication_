//External imports
import jwtDecode from 'jwt-decode';
import { useEffect, useRef,useState } from 'react';


  const loadScript = (src) =>
  new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve()
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve()
    script.onerror = (err) => reject(err)
    document.body.appendChild(script)
  })

const GoogleAuth = () => {

    const[user,setUser]=useState({});

  const googleButton = useRef(null);

  useEffect(() => {
    const src = 'https://accounts.google.com/gsi/client'
    const id = "420031286914-2us2kap97h30euaka61e5ld5fq4vh7s6.apps.googleusercontent.com"

    loadScript(src)
      .then(() => {
        /*global google*/
        console.log(google)
        google.accounts.id.initialize({
          client_id: id,
          callback: handleCredentialResponse,
        })
        google.accounts.id.renderButton(
           
          googleButton.current, 
          { theme: 'outline', size: 'large' } 
        )
      })
      .catch(console.error)

  }, [])

  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject=jwtDecode(response.credential);
    console.log(userObject);
    console.log(userObject);
    setUser(userObject);
    document.getElementById('signInDive').hidden=true;
  }

  function handleSignOut(event){
    setUser({});
    document.getElementById( 'signInDive').hidden=false;
  }

  return (

    <div><h3>hhhfhdfh</h3>
    <div ref={googleButton} id='signInDive'></div>

       

{
        user && <div>

        <img src={user.picture}></img>
        <h3>{user.name}</h3>
        <button onClick={ (e) =>handleSignOut(e)}>Sign Out</button> 
        </div>


        
    }
    </div>

    
   
  )
}

export default GoogleAuth