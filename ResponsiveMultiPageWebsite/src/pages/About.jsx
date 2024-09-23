import countryFacts from "../assets/api/countryData.json";
const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we are proud of
      </h2>
      <div className="gradient-cards">
        {countryFacts.map((country) => {
            const{id,countryName,capital,population,interestingFact}=country
          return (
            <div className="container-card" key={id}>
              <div className="container bg-blue-box">
                <p className="card-title">CountyName:{countryName}</p>
                <p>
                  <span className="card-description">Capital:{capital}</span>
                </p>
                <p>
                  <span className="card-description">Population:{population}</span>
                </p>
                <p>
                  <span className="card-description">Interesting Fact:{interestingFact}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default About;
