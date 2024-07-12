import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import styled from 'styled-components';

const ContainerMod = styled.div`
    width: 450px;
    background-color: rgba(255,255,255, 0.15);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    padding: 40px;
    border-radius: 10px;

    h1{
        text-align: center;
        font-size: 30px;
        color: #FFF;
    }

    .inputs{
        position: relative;
        width: 100%;
        height: 50px;
        margin: 30px auto;
    }

    .inputs input{
        width: 100%;
        height: 100%;
        background-color: transparent;
        outline: none;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 40px;
        font-size: 16px;
        color: #FFF;
        padding: 20px 25px;
    }

    .inputs input::placeholder{
        color: #FFF;
    }

    .inputs .icon{
        position: absolute;
        right: 25px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
        color: #FFF;
    }

    .lembre{
        display: flex;
        justify-content: space-between;
        font-size: 15px;
        margin: -15px 0 15px;
    }

    .lembre label{
        color: #FFF;
    }

    .lembre input{
        margin-right: 5px;
    }

    .lembre a, .cadastrar p a{
        color: #FFF;
        text-decoration: none;
    }

    .lembre a:hover, .cadastrar p a:hover{
        text-decoration: underline;
    }

    button{
        width: 100%;
        height: 50px;
        background-color: #FFF;
        border: none;
        outline: none;
        border-radius: 40px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
        text-shadow: none;
    }

    .cadastrar{
        font-size: 15px;
        text-align: center;
        margin: 20px 0 10px;
    }

    .cadastrar p{
        text-shadow: none;
        font-weight: 500;
    }

    @media (max-width: 470px){
        width: 100%;
        margin: 10px;

        h1{
            font-size: 24px;
        }
    }

    @media (max-width: 370px){
        .lembre{
            display: flex;
            flex-direction: column;
            gap: 5px;
        } 
    }

    @media (max-width: 245px){
        .inputs .icon{
            display: none;
        }
    }
`

const Login = () => {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const entrar = (event) => {
        event.preventDefault();
        alert("Dados Enviados: " + usuario + " - " + senha);
    };

  return (
    <ContainerMod>
        <form onSubmit={entrar}>
            <h1>Faça o Login</h1>
            <div className="inputs">
                <input 
                    type='email' 
                    placeholder='E-mail' 
                    required
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <FaUser className="icon" />
            </div>

            <div className="inputs">
                <input 
                    type='password' 
                    placeholder='Senha' 
                    required
                    onChange={(e) => setSenha(e.target.value)}
                />
                <FaLock className="icon" />
            </div>

            <div className="lembre">
                <label>
                    <input type="checkbox" />
                    Lembre de mim.
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>

            <button>Entrar</button>

            <div className="cadastrar">
                <p>Não tem uma conta? <a href='#'>Cadastrar</a></p>
            </div>
        </form>
    </ContainerMod>
  )
}

export default Login;