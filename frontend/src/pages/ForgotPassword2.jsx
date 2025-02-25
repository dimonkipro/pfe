import image from "../assets/forgot2.jpg";
import { Link } from "react-router-dom";

const ForgotPassword2 = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-7 d-none d-lg-block bg-password-image">
                  <img src={image} alt="" className="img-fluid h-100" />
                </div>
                <div className="col-lg-5">
                  <div className="p-3">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-2">
                        Forgot Your Password?
                      </h1>
                      <p className="mb-4">
                        We get it, stuff happens. Just enter your email address
                        below and we&apos;ll send you a link to reset your
                        password!
                      </p>
                    </div>
                    <form className="user">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control rounded-pill "
                          id="Email"
                          placeholder="Enter Email Address..."
                        />
                        <label htmlFor="EmailInput" className="form-label">
                          Email Address
                        </label>
                      </div>
                      <button
                        href="login.html"
                        className="btn btn-warning p-3 d-grid gap-2 col-10 mx-auto rounded-pill"
                      >
                        Reset Password
                      </button>
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link className="small text-secondary" to="/register2">
                        Create an Account!
                      </Link>
                    </div>
                    <div className="text-center mb-4">
                      <Link className="small text-secondary" to="/login2">
                        Already have an account? Login!
                      </Link>
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

export default ForgotPassword2;
