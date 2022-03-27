import "./style.css";

const Testimonial = () => {
  return (
    <div className="testimonials-cover container py-3 px-3 mt-5">
      <div className="frosted ">
        <div className="frosted-content p-3">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm-12 col-md-8 col-lg-4 col-xl-4 p-2 pt-4">
              <div className="testimonial-icon__image"></div>
              <div className="trade-volume">Trading volume</div>
              <div className="trade-volume__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quis placeat atque ullam tempora veritatis, perferendis
                incidunt. Sed, impedit rerum. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Doloribus quam vel modi
                consectetur dolores veritatis cum beatae nobis id corporis?
              </div>
              <div className="rate-btn">View rate</div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-7 d-none col-xl-7 border border-primary ">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5">
                  <div className="testimonial-card">
                    <div className="testimonial-card__title">
                      Completed 500+ orders.
                    </div>
                    <div className="testimonial-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Explicabo omnis est delectus, quasi officiis hic quod
                      pariatur laborum temporibus perferendis.
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5">
                  <div className="testimonial-card">
                    <div className="testimonial-card__title">
                      Completed 500+ orders
                    </div>
                    <div className="testimonial-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Explicabo omnis est delectus, quasi officiis hic quod
                      pariatur laborum temporibus perferendis.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
