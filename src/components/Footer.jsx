import React from 'react';
import { GiConverseShoe } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className=".container-fluid">
        <footer className="bg-dark text-center text-white">
          {/* <!-- Grid container --> */}
          <div className="container p-4 pb-0">
            {/* <!-- Section: Social media --> */}
            <section className="mb-4">
              <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <Link to="/">
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-google"></i>
                </a>
              </Link>
              <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </section>
          </div>
          {/* <!-- Grid container --> */}

          <div className="text-center text-justify p-3">
            © 2022 Copyright:
            <a className="text-white navbar-brand">
              {' '}
              <Link to="/">
                {' '}
                <GiConverseShoe size={30} color={'white'} />{' '}
              </Link>
              SNikers - All Rights Reserved.
            </a>
          </div>
        </footer>
      </div>
      {/* <!-- End of .container --> */}
    </>
  );
};

export default Footer;
