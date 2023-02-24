function Tuile({id,image,titre,description}) {
    return (
      <div className="Tuile-container" id={id}>
          <img className="image-container" src={image} alt={description}/>
          <h2 className="tuile-titre">{titre}</h2>
      </div>
    )
}

export default Tuile