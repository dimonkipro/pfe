import { Link } from "react-router-dom";
import image from "../assets/login4.jpg";
const Login2 = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-7 d-none d-lg-block ">
                  <img src={image} alt="" className="img-fluid h-100" />
                </div>
                <div className="col-lg-5">
                  <div className="p-3">
                    <div className="text-center">
                      <h1 className="mb-4">Welcome Back!</h1>
                    </div>
                    <form>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control rounded-pill"
                          id="EmailInput"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                        />
                        <label htmlFor="EmailInput" className="form-label">
                          Email Address
                        </label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control rounded-pill"
                          id="PasswordInput"
                          placeholder="Password"
                        />
                        <label htmlFor="PasswordInput" className="form-label">
                          Password
                        </label>
                      </div>
                      <div className="form-group mb-3">
                        <div className="small">
                          <input
                            type="checkbox"
                            className=""
                            id="customCheck"
                          />
                          <label className=" ms-2" htmlFor="customCheck">
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button
                        href="index.html"
                        className="btn btn-warning m-4 p-3 d-grid gap-2 col-10 mx-auto rounded-pill"
                      >
                        Login
                      </button>
                      <hr />
                    </form>

                    <div className="text-center">
                      <Link
                        className="small text-secondary"
                        to="/forgot-password2"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="text-center mb-3">
                      <Link className="small text-secondary" to="/register2">
                        Create an Account!
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

export default Login2;
