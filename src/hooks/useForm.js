import { useState } from "react";
export function useForm(props){
    const [formVisivel, setFormVisivel] = useState(false);
    
    const [values, setValues] = useState(props.initialValues);
    const optionsSelect = [
        { id: 0, value: "selecione", text:'Selecione um valor'},
        { id: 1, value: "gerais", text:'Gerais' },
        { id: 2, value: "jogos" , text:'Jogos'},
        { id: 3, value: "musica", text:'Musica' },
      ];

    return {
        values,
        formVisivel,
        setFormVisivel,
        handleChange:(e) => {
                const value = e.target.value;
                const name = e.target.name;
                setValues({
                  ...values,
                  [name]: value,
                });
        },
        clearForm(){
            setValues({
                titulo: "", url: "", playlist:""
            }),
            setFormVisivel(false);
        },
        optionsSelect
    }

}