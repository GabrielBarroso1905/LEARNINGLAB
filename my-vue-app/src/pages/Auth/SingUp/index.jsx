import Button from "../../../Components/Button"
import Input from "../../../Components/Input"

import "./styles.css"

function SignUp() {
  return (
    <div className="sign-up-container">
      <form>
        <h1>Crie sua conta</h1>

        <Input type="email" placeholder="E-mail" />

        <Input placeholder="Nome" />

        <Input type="password" placeholder="Senha" />

        <Input type="password" placeholder="Confirmar senha" />
          
        <a href="https://google.com" target="_target">Voltar para login 👈</a>

        <Button type="submit">Cadastrar</Button>
      </form>
    </div>
  )
}

export default SignUp