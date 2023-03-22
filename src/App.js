import './App.css';

function App() {
  return (

  <>
  <div className='mainDiv'>
  <div className='leftDiv'>
    <div className='leftCompDiv'>
    <div className='learnToCode'>Learn to code by watching others</div>
    <div className='seeHow'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </div>
    </div>
  </div>
  <div className='rightDiv'>
    <div className='tryItFree'>
      <div className='tryItFreeChild'><span className='days7'>Try it free 7 days</span> <span className='then'> then $20/mo.thereafter</span> </div>
    </div>
    <div className='signUp'>
      <div className='firstName'><input className='firstNameInput'></input></div>
      <div className='lastName'><input className='lastNameInput' placeholder='Last name'></input></div>
      <div className='email'><input className='emailInput'></input></div>
      <div className='password'><input className='passwordInput'></input></div>
      <div className='submit'><p className='submitChild'>CLAIM YOUR FREE TRIAL</p></div>
      <div className='termsAndServices'><span className='termsAndServices1'>By clicking the button, you are agreeing to our</span><span className='termsAndServices2'> &nbsp; Terms and Services</span></div>
    </div>
  </div>
  </div>
  </>
  )
}

export default App;
