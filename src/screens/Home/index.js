// import AboutUs from "../../components/AboutUs";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import Market from "../../components/Market";
import Reviews from "../../components/Review";
import Services from "../../components/Services";
import Testimonial from "../../components/Testimonials";
import "./style.css";

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <div className="gradient"></div>
        <Hero />
        <Services />
        <Market />
        <Testimonial />
        <Reviews />
        {/* <AboutUs /> */}
      </div>
    </Layout>
  );
};

export default Home;
