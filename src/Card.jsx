
const Card = ({ data }) => {
  return (
    <div className="poke-container" key={data.id}>
      {data.map((item) => (
        <div className="pokecard" key={data.id}>
          <h3>{item.pokemon}</h3>
          <h6>HP {item.hitpoints}</h6>
          <h6>{item.type}</h6>
          <img src={item.image_url} alt={item.movie} />
          <h6>{item.abilities}</h6>
          {/* <h6>{item.evolutions}</h6> */}
          <h6>{item.location}</h6>
        </div>
      ))}
    </div>
  );
};

export default Card;
