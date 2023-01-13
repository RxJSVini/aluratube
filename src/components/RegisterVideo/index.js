import React from "react";
import { StyledRegisterVideo } from "./styles";
import { useForm } from "../../hooks/useForm";
import { videoService } from "../../services/videoServiceSupaBase";

function RegisterVideo() {
  const service = videoService();
  const form = useForm({
    initialValues: { titulo: "", url: ""},
  });


  function handleSubmit(e) {
    e.preventDefault();
    
    service
      .setNewVideo({
        title: form.values.titulo,
        url: form.values.url,
        thumb: form.values.url,
        playlist: form.values.playlist,
      })
    form.clearForm();
  }

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => form.setFormVisivel(true)}>
        +
      </button>
      {form.formVisivel && (
        <form onSubmit={handleSubmit}>
          <div>
            <button
              className="close-modal"
              onClick={() => form.setFormVisivel(false)}
            >
              x
            </button>
            <input
              placeholder="Titulo do vídeo"
              name="titulo"
              value={form.values.titulo}
              onChange={form.handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              value={form.values.url}
              onChange={form.handleChange}
            />
            <select name="playlist" defaultValue={form.optionsSelect[0].id} onChange={form.handleChange}>
              {form.optionsSelect.map((optionItem) =>{
                return(
                  <option key={optionItem.id} value={optionItem.value}>{optionItem.text}</option>
                )
              })}
            </select>

            <button type="submit">Cadastrar</button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
}

export default RegisterVideo;
