import "./style.css";

const Testimonial = () => {
  return (
    <div className="testimonials-cover container py-3 px-3 mt-5" id={"service"}>
      <div className="frosted ">
        <div className="frosted-content p-3">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm-12 col-md-8 col-lg-4 col-xl-4 p-2 pt-4">
              <div className="testimonial-icon__image"></div>
              <div className="trade-volume">Trading volume</div>
              <div className="trade-volume__content">
                Over the past few years with we have accumlated a trading volume
                of over $1,562,703.15, completed 5393 transactions. We are
                continously taking steps in making our number grow and also
                satisfying our cients (you). Thank you for always trusting us.
              </div>
            </div>
            <div className="col-sm-12 col-md-10 mt-md-3 col-lg-8 col-xl-8  ">
              <div className="row d-flex align-items-center justify-content-evenly">
                <div className="col-sm-12 col-md-5 col-lg-5.5 col-xl-5.5">
                  <div className="testimonial-card d-none my-2">
                    <div className="testimonial-card__title">
                      Completed $1,562,703.15+ orders.
                    </div>
                    <div className="testimonial-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Explicabo omnis est delectus, quasi officiis hic quod
                      pariatur laborum temporibus perferendis.
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 d-none col-md-5 col-lg-5.5 col-xl-5.5">
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
