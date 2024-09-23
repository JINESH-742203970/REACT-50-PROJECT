import { FaLongArrowAltRight } from "react-icons/fa"
const HeroSection=()=>{
    return (
        <main className="hero-section main">
        <div className="container grid grid-two-cols">
              <div className="hero-content">
                <h1 className="heading-xl">
                    Explore the world,One Country at a time.
                </h1>
                <p className="paragraph">
                    Discover the history,culture and beauty of every nation.Sort ,search and filter through countries to find the details you
                </p>
                <button className="btn btn-darken btn-inline bg-white-box">
                    Start Exploring <FaLongArrowAltRight/>
                </button>
              </div>
              <div className="hero-image">
                <img className="banner-image" src="/images/world.png" alt="world is beauty" />
              </div>
        </div>
    </main>
    )
}
export default HeroSection;