import React from 'react'

export const PrimerComponente = () => {
  let nombre = "Pablo";
  let apellido = "Suyo";
  let cursos = ["PHP", "JAVASCRIPT", "REACT", "HTML"];
  return (
    <div>
      <h2>Primer Componente</h2>
      <p>Este es el primer componente, es un trozo de texto.</p>
      <p>Mi nombre es: {nombre}</p>
      <p>Mi apellido es: {apellido}</p>
      <br></br>
      <p>Mostrar Lenguajes de Programacion:</p>
      <ul>
        {
          //poder listar un array
          cursos.map((curso,indice) => {
            return (<li key={indice}>{curso}</li>)
          })
        }
      </ul>
    </div>
  )
}
