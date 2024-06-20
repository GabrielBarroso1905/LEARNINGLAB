
import React from "react";
import "./styles.css";
import Button from "../../../Components/Button"
import Input from "../../../Components/Input"

function SignUp() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Gerencie <br />
          seus <br />
          <span>horários</span>.
        </h1>

        <form>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Input type="email" placeHolder="E-mail" />
            <span id="email-error-message"></span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <Input type="password" placeHolder="Senha" />
            <span id="password-error-message"></span>
          </div>

          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            Cadastre-se aqui 👈
          </a>
          
          <Button type="submit">Entrar</Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
