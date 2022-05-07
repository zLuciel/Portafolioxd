import ButoomCv from "../buttom/ButoomCv";
import Skills from "../skills2/Skills";
/*import Skills from '../skills2/Skills';*/
import "./Details.css";
const Details = () => {
  /*const [detailsDynamic, setDetailsDynamic] = useState(false);*/

  return (
    <div className="details-container">
      <div className="details2">
        <div className="details2-div">
          <h1>Who am I?</h1>
        <h2>I am Emmanuel Abregu, a Tech passionate and Web Developer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque atque
          at impedit tenetur maxime sunt saepe, vel cupiditate, delectus nam
          quos error necessitatibus modi fuga tempore consequatur neque eveniet
          suscipit! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <div className="list-details">
        <p> <strong>Frase :</strong> Dar mis ideas es lo mejor para una empresa</p>
        <p> <strong>Edad :</strong> 23</p>
        <p> <strong>Estado :</strong> soltero</p>
        <ButoomCv/>
        </div>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default Details;
