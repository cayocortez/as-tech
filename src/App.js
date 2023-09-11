import React, { useState} from 'react';
import './App.css';

function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "cayo.queiroz@pucpr.br",
      password: "123456"
    },
    {
      username: "user1",
      password: "pass1"
    }
  ];

  const errors = {
    uname: "Usuário ou senha incorretos!",
    pass: "Usuário ou senha incorretos!"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        
        setErrorMessages({ name: "pass", message: errors.pass});
      } else {
        setIsSubmitted(true);
        }
      } else {
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };

    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );

      const renderForm = (
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <div className='input-container'>
              <label>Usuário: </label>
              <input type='text' name='uname' required />
              {renderErrorMessage("uname")}
            </div>
            <div className='input-container'>
              <label>Senha: </label>
              <input type='password' name='pass' required />
              {renderErrorMessage("pass")}
            </div>
            <div className='button-container'>
              <input type='submit' />
            </div>
          </form>
        </div>
      );

      return (
        <div className='app'>
          <div className='login-form'>
            <h1> Login</h1>
            {isSubmitted ? <div>Acessado com sucesso!</div> : renderForm}
          </div>
        </div>
      );

}

export default App;