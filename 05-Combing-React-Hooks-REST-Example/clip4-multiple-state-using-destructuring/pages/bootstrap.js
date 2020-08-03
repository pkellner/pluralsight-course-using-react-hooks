import React, { Component } from 'react';

class bootstrap extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="row">
            <div className="col-12 col-sm-4 text-center">
              <h6 className="text-uppercase">October 19-20&nbsp;&nbsp;2019</h6>
              <h6 className="text-uppercase">San Jose, California</h6>
            </div>
            <div className="col-12 col-sm-8 text-lg-right">
              <div>
                <img src="/static/SVCClogo.png" />
              </div>
              <h2>Silicon Valley Code Camp 2019</h2>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row marginbottom10">
            <div className="col-sm-2" />
            <div className="col-sm-8">
              <div className="content">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  &nbsp;
                  <span className="input-group-btn">
                    <button className="btn" type="submit">
                      Get Updates
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-2" />
          </div>
        </div>

        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Speakers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sessions
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col margintopbottom">
              <h2>Speakers</h2>
            </div>
          </div>

          <div className="row">
            <div className="card-deck">
              <div className="card col-4 cardmin">
                <img
                  className="card-img-top"
                  src="/static/speakers/Speaker-8367.jpg"
                />
                <div className="card-body">
                  <a
                    href="#"
                    className="btn btn-lg btn-block btn-outline-primary margintopbottom10"
                  >
                    See Profile
                  </a>
                  <h4 className="card-title">Gayle Laakmann McDowell</h4>
                  <p className="card-text">
                    Founder/CEO of CareerCup, a company that does lots of things
                    around tech interviews, such as consulting and publishing.
                  </p>
                </div>
              </div>

              <div className="card col-4 cardmin ">
                <img
                  className="card-img-top"
                  src="/static/speakers/Speaker-2920.jpg"
                />
                <div className="card-body">
                  <a
                    href="#"
                    className="btn btn-lg btn-block btn-outline-primary margintopbottom10"
                  >
                    See Profile
                  </a>
                  <h4 className="card-title">Ron Lichty</h4>
                  <p className="card-text">
                    Interim VP Eng. Transforming chaos to clarity. Author,
                    Managing the Unmanageable (Addison Wesley).
                  </p>
                </div>
              </div>

              <div className="card col-4 cardmin">
                <img
                  className="card-img-top"
                  src="/static/speakers/Speaker-1124.jpg"
                />
                <div className="card-body">
                  <a
                    href="#"
                    className="btn btn-lg btn-block btn-outline-primary margintopbottom10"
                  >
                    See Profile
                  </a>
                  <h4 className="card-title">Douglas Crockford</h4>
                  <p className="card-text">
                    Douglas Crockford discovered the JSON Data Interchange
                    Format. He is also the author of _JavaScript: The Good
                    Parts_. He has been called a guru, but he is actually more
                    of a mahatma.
                  </p>
                </div>
              </div>

              <div className="card col-4 cardmin">
                <img
                  className="card-img-top"
                  src="/static/speakers/Speaker-39062.jpg"
                />
                <div className="card-body">
                  <a
                    href="#"
                    className="btn btn-lg btn-block btn-outline-primary margintopbottom10"
                  >
                    See Profile
                  </a>
                  <h4 className="card-title">Mike North</h4>
                  <p className="card-text">
                    Mike trains web development teams all over the world, at
                    companies ranging from tiny stealth-mode startups to Silicon
                    Valley tech giants.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col margintopbottom">
              <hr />
              <h2>Sessions</h2>
            </div>
          </div>

          <div className="row">
            <div className="card-deck">
              <div className="card col-4 cardmin">
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">How JavaScript Works</a>
                  </h4>
                  <h6 className="card-title">Douglas Crockford</h6>
                  <p className="card-text">
                    Douglas Crockford is the author of{' '}
                    <b>How JavaScript Works</b>, the shocking best seller that
                    rips the lid off behind the scenes. In this light-hearted
                    romp thru the world's most misunderstood programming
                    language, Crockford reveals what is actually going on, and
                    how we can use this to write better programs. "
                  </p>
                </div>
              </div>

              <div className="card col-4 cardmin">
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Managing in an Agile World</a>
                  </h4>
                  <h6 className="card-title">Ron Lichty</h6>
                  <p className="card-text">
                    Managers have critical roles to play enabling agile adoption
                    and agile success. While “self-organizing” does not mean no
                    managers, the old manager roles and rules no longer apply.
                    This session is about manager roles that make agile teams
                    thrive
                  </p>
                </div>
              </div>

              <div className="card col-4 cardmin">
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Cracking the Coding Interview</a>
                  </h4>
                  <h6 className="card-title">Gayle Laakmann McDowell</h6>
                  <p className="card-text">
                    Programmer & best-selling author of Cracking the Coding
                    Interview presents a technical talk on how coding interviews
                    work and how to do well on them. This will be a deeply
                    technical talk covering data structures and algorithms."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron text-center">
          <h7>
            <b>Silicon Valley Code Camp 2018</b> is Hosted by PayPal in San Jose
            at their Town Hall location. 2121 North First Street.{' '}
            <b>October 13-14 2018</b>
          </h7>
        </div>
      </div>
    );
  }
}

bootstrap.propTypes = {};
bootstrap.defaultProps = {};

export default bootstrap;
