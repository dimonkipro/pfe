import { Link } from "react-router-dom";
import image from "../assets/login3.jpg";

const Register2 = () => {
  return (
    <div className="container">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-7 d-none d-lg-block bg-register-image">
              <img src={image} alt="" className="img-fluid h-100" />
            </div>
            <div className="col-lg-5">
              <div className="p-3">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form>
                  <div className="form-group row mb-3">
                    <div className="col-sm-6 mb-3 mb-sm-0 form-floating">
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        id="FirstName"
                        placeholder="First Name"
                      />
                      <label htmlFor="FirstName" className="form-label ms-2">
                        First name
                      </label>
                    </div>
                    <div className="col-sm-6 form-floating">
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        id="LastName"
                        placeholder="Last Name"
                      />
                      <label htmlFor="LastName" className="form-label ms-2">
                        Last name
                      </label>
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control rounded-pill"
                      id="Email"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email Address..."
                    />
                    <label htmlFor="Email" className="form-label">
                      Email Address
                    </label>
                    <div id="emailHelp" className="form-text px-2">
                      We&apos;ll never share your email with anyone else (❁´◡`❁)
                      .
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <div className="col-sm-6 mb-3 mb-sm-0 form-floating">
                      <input
                        type="password"
                        className="form-control rounded-pill"
                        id="Password"
                        placeholder="Password"
                      />
                      <label htmlFor="Password" className="form-label ms-2">
                        Password
                      </label>
                    </div>
                    <div className="col-sm-6 form-floating">
                      <input
                        type="password"
                        className="form-control rounded-pill"
                        id="RepeatPassword"
                        placeholder="Repeat Password"
                      />
                      <label
                        htmlFor="RepeatPassword"
                        className="form-label ms-2"
                      >
                        Repeat password
                      </label>
                    </div>
                  </div>
                  <button
                    href="login.html"
                    className="btn btn-warning m-4 p-3 d-grid gap-2 col-10 mx-auto rounded-pill"
                  >
                    Register Account
                  </button>
                </form>
                <hr />
                <div className="text-center">
                  <Link className="small text-secondary" to="/forgot-password2">
                    Forgot Password?
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
  );
};

export default Register2;
