import React, { useState } from 'react';
import './styles/styles.css';
import image from './images/image.png';
import isValidCPF from "./util/isValidCPf"

const Form = () => {

    const [creciState, setCreciState] = useState("");
    const [creciInvalidState, setCreciInvalidState] = useState("");
    const [nameState, setNameState] = useState("");
    const [nameInvalidState, setNameInvalidState] = useState("");
    const [cpfState, setCpfState] = useState("");
    const [cpfInvalidState, setCpfInvalidState] = useState("");

    const handleCreciInput = (event) => {
        setCreciInvalidState(false);
        setCreciState(event.target.value);
    };
    const handleNameInput = (event) => {
        setNameInvalidState(false);
        setNameState(event.target.value);
    };
    const handleCpfInput = (event) => {
        setCpfInvalidState(false);
        setCpfState(event.target.value);
    };

    const validateInputs = () => {
        let status = true;
        if (!creciState && !nameState && !cpfState) {
            setCreciInvalidState(true);
            setNameInvalidState(true);
            setCpfInvalidState(true);
            
            status = false;
            window.alert("Preencha os campos corretamente")
            return status
        };

        if (!creciState) {
            setCreciInvalidState(true);
            status = false;
        };
        if (!nameState) {
            setNameInvalidState(true);
            status = false;
        };
        if (!isValidCPF(cpfState)) {
            setCpfInvalidState(true);
            window.alert("CPF inválido!");
            status = false;
            return status
        };
        if (!status) window.alert("Preencha os campos corretamente")
        return status;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateInputs()) return

        window.alert(`
            Parabéns, conta criada com sucesso! :)
            CRECI: ${creciState}
            Nome: ${nameState}
            CPF: ${cpfState}
        `);
    }

    return (
        <main className="flex flexCenter fullHeight">
            <div>
                <div className="imageDiv flex flexDirectionColumn flexAlignItemsCenter">
                    <img src={image} alt="logo" style={{ height: "15vh" }} />
                    <p>Olá, crie uma conta</p>
                </div>
                <div>
                    <form className="flex flexDirectionColumn" onSubmit={handleSubmit}>
                        <label>
                            <p>CRECI</p>
                            <input className={creciInvalidState ? "inputInvalidValue" : ""} value={creciState} onChange={handleCreciInput} />
                        </label>
                        <label>
                            <p>Nome Completo</p>
                            <input className={nameInvalidState ? "inputInvalidValue" : ""} value={nameState} onChange={handleNameInput} />
                        </label>
                        <label>
                            <p>CPF</p>
                            <input className={cpfInvalidState ? "inputInvalidValue" : ""} value={cpfState} onChange={handleCpfInput} />
                        </label>
                        <button>
                            Avançar
            </button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Form;