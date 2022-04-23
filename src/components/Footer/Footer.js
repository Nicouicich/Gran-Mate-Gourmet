import React from "react";

export default function Footer () {


  
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  


  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
      <footer id="dk-footer" className="dk-footer footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="dk-footer-box-info">
                <a href="index.html" className="footer-logo">
                <img src="/assets/images/logo.svg" alt="logo" className="img-fluid" />
                </a>

                <div className="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                    <li>
                      <a href="/#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/granmategourmet_nqn/" rel = "noopener noreferrer" target="_blank">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-md-12">
                  <div className="contact-us">

                    <div className="contact-info">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.7902550354!2d-68.07922488414034!3d-38.951619807774364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33b9f0e69fd5%3A0x78da4376f323362b!2sJulio%20Argentino%20Roca%201295%2C%20Q8300%20Neuqu%C3%A9n!5e0!3m2!1ses-419!2sar!4v1650667346137!5m2!1ses-419!2sar" width="400" height="300" style={{"borderRadius" : "25px "}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title ="Ubicación"></iframe>
                    </div>
                  </div>
                </div>

              </div>
              
            </div>
          </div>
        </div>


        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <span>Copyright © 2022, Todos los Derechos Reservados</span>
              </div>
              <div className="col-md-6">
                <div className="copyright-menu">
                  <ul>
                    <li>
                      <a href="/#">Home</a>
                    </li>
                    <li>
                      <a href="/#">Terms</a>
                    </li>
                    <li>
                      <a href="/#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div id="back-to-top" className="back-to-top">
          <button className="btn btn-dark" id="btnTop" title="Back to Top" style={{ "display": "block" }} onClick = {topFunction}>
            <i className="fa fa-angle-up"></i>
          </button>
        </div>
      </footer>
    </>
  )

}