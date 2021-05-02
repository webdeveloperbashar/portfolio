import React from "react";
import "./About.css";

const Blog = () => {
  return (
    <section class="section light-section pp-scrollable" id="About">
      <div class="about-me">
        <div class="sec-icon">
          <span class="flaticon-black-male-user-symbol"></span>
        </div>
        <div class="sec-count">02</div>
        <div class="sec-float-text">
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
        </div>
        <div class="auto-container">
          <div class="center-box">
            <div class="center-inner">
              <div class="sec-title">
                <span class="title">BASIC INFO ABOUT ME</span>
                <h2>About Myself</h2>
              </div>

              <div class="row">
                {/* <!-- Content column --> */}
                <div class="content-column col-lg-7 col-md-12 col-sm-12 order-2">
                  <div class="inner-column">
                    <div class="text-box">
                      <h4>
                        Viverra{" "}
                        <span class="theme_color">
                          Tristique Placerat Massa
                        </span>{" "}
                        Estio Nos Consectetur Quisque
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis hendrerit dui dapibus, congue sapien eu, egestas
                        risus. Sed non leo a lorem ullamcorper ultricies quis
                        vel nisl.
                      </p>
                    </div>

                    {/* <!--Progress--> */}
                    <div class="progress-bars row">
                      <div class="bar-item col-lg-6 col-md-6 col-sm-12">
                        <div class="skill-header">
                          <div class="skill-title">Development</div>
                        </div>
                        <div class="skill-bar">
                          <div class="bar-inner">
                            <div class="bar progress-line" data-width="60">
                              <div class="skill-percentage">
                                <div class="count-box">
                                  <span
                                    class="count-text"
                                    data-speed="2000"
                                    data-stop="60"
                                  >
                                    0
                                  </span>
                                  %
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!--Skill Item--> */}
                      <div class="bar-item col-lg-6 col-md-6 col-sm-12">
                        <div class="skill-header">
                          <div class="skill-title">UI/UX design</div>
                        </div>
                        <div class="skill-bar">
                          <div class="bar-inner">
                            <div class="bar progress-line" data-width="70">
                              <div class="skill-percentage">
                                <div class="count-box">
                                  <span
                                    class="count-text"
                                    data-speed="2000"
                                    data-stop="70"
                                  >
                                    0
                                  </span>
                                  %
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!--Skill Item--> */}
                      <div class="bar-item col-lg-6 col-md-6 col-sm-12">
                        <div class="skill-header">
                          <div class="skill-title">Photography</div>
                        </div>
                        <div class="skill-bar">
                          <div class="bar-inner">
                            <div class="bar progress-line" data-width="80">
                              <div class="skill-percentage">
                                <div class="count-box">
                                  <span
                                    class="count-text"
                                    data-speed="2000"
                                    data-stop="80"
                                  >
                                    0
                                  </span>
                                  %
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!--Skill Item--> */}
                      <div class="bar-item col-lg-6 col-md-6 col-sm-12">
                        <div class="skill-header clearfix">
                          <div class="skill-title">Marketing</div>
                        </div>
                        <div class="skill-bar">
                          <div class="bar-inner">
                            <div class="bar progress-line" data-width="90">
                              <div class="skill-percentage">
                                <div class="count-box">
                                  <span
                                    class="count-text"
                                    data-speed="2000"
                                    data-stop="90"
                                  >
                                    0
                                  </span>
                                  %
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="fact-counter">
                      <div class="row clearfix">
                        {/* <!--Column--> */}
                        <div class="counter-column col-xl-4 col-lg-6 col-md-4 col-sm-4">
                          <div class="count-box">
                            <span class="icon flaticon-fire"></span>
                            <span
                              class="count-text"
                              data-speed="3000"
                              data-stop="198"
                            >
                              0
                            </span>
                            <h4 class="counter-title">Projects completed</h4>
                          </div>
                        </div>

                        {/* <!--Column--> */}
                        <div class="counter-column col-xl-4 col-lg-6 col-md-4 col-sm-4">
                          <div class="count-box">
                            <span class="icon flaticon-coffee"></span>
                            <span
                              class="count-text"
                              data-speed="3000"
                              data-stop="5670"
                            >
                              0
                            </span>
                            <h4 class="counter-title">Cup of coffee</h4>
                          </div>
                        </div>

                        {/* <!--Column--> */}
                        <div class="counter-column col-xl-4 col-lg-6 col-md-4 col-sm-4">
                          <div class="count-box">
                            <span class="icon flaticon-friends-2"></span>
                            <span
                              class="count-text"
                              data-speed="3000"
                              data-stop="427"
                            >
                              0
                            </span>
                            <h4 class="counter-title">Satisfied clients</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Image column --> */}
                <div class="image-column col-lg-5 col-md-12 col-sm-12">
                  <div class="image-box">
                    <div class="image">
                      <img
                        src="images/resource/about-img.png"
                        alt=""
                        data-depth="0.20"
                        class="girl-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
