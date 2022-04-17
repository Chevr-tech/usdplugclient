import "./style.css";
import { data } from "./data";

const Services = () => {
  return (
    <div className="services" id="whoweare">
      <div className="services-title">
        Lorem ipsum dolor sit amet consectetur.
      </div>
      <div className="services-caption text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam iusto.
        Lorem ipsum dolor sit.
      </div>
      <div className="container-fluid">
        <div className="services-content__cover">
          {data.map((item, i) => (
            <div
              className="services-card"
              data-aos="fade-up-right"
              data-aos-duration="500"
              key={item.id}
            >
              <div className="services-image__cover ">
                <img
                  src={item.image}
                  style={{
                    transform: item.id === 3 ? "scale(1.2)" : null,
                    padding: item.id === 3 ? "10px 0 0 0" : null,
                  }}
                  alt=""
                  className="service-img"
                />
              </div>
              <div className="service-card__title">{item.title}</div>
              <div className="service-content">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
