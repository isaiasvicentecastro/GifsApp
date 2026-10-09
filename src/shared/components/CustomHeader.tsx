interface Props{
    title: string;
    description?: string;
}

export const CustomHeader = ({title, description}:Props) => {
  return (
    <div className="content-center">
      <h1 data-testid="tituloHeader">{title}</h1>
      {
        /* El primero hace referencia a que 
          ¿si descripcion existe?, tienes que crearme <p></p> */
        description && <p>{description}</p>
      }
    </div>
  )
}

export default CustomHeader
