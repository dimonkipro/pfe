import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyEmail } from "../Redux/Actions/authActions";

const VerifyEmail = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, isLoading } = useSelector((state) => state.auth);

  const handleChange = (index, value) => {
    const newCode = [...code];
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    dispatch(verifyEmail(verificationCode, navigate));
  };

  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return (
    <div
      className="container col-6 position-absolute top-50 start-50 translate-middle
     p-4 rounded-4 text-bg-dark"
    >
      <h1>Verify Your Email</h1>
      <p>Enter the 6-digit code sent to your email address.</p>

      <form onSubmit={handleSubmit} className="verif">
        <div className="input-group">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="6"
              className="form-control text-center fs-2 mb-4"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </div>

        {error && <p className="text-danger">{error}</p>}
        <button
          className="btn btn-success"
          type="submit"
          disabled={isLoading || code.some((digit) => !digit)}
        >
          {isLoading ? "Verifying..." : "Verify Email"}
        </button>
      </form>
    </div>
  );
};

export default VerifyEmail;
