import './App.css';
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function registeri(data) {
    console.log(data);
  }
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
    <form onSubmit={handleSubmit(registeri)} className='signUp'>
      <div className='firstName'><input 
        type="text"
          placeholder="name"
          {...register("name", { required: true })} className='firstNameInput'
          />
          {errors.name && <h1 className='firstNameEror' style={{ color: "red", fontSize: "15px" , textAlign: "right" }}>firstName can not be empty</h1>}
          </div>
      <div className='lastName'><input className='lastNameInput' placeholder='Last name'></input></div>
      <div className='email'><input className='emailInput'></input></div>
      <div className='password'><input className='passwordInput'></input></div>
      <button className='button' type="submit">CLAIM YOUR FREE TRIAL</button>
      <div className='termsAndServices'><span className='termsAndServices1'>By clicking the button, you are agreeing to our</span><span className='termsAndServices2'> &nbsp; Terms and Services</span></div>
    </form>
  </div>
  </div>
  </>
  )
}

export default App;
