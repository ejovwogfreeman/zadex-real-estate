import React, { useState } from "react";
import "../css/General.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const Signup = () => {
  const params = useParams();
  const [user, setUser] = useState({
    referral: params.ref ? params.ref : "",
    username: "",
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [UserState, setUserState] = React.useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (user.password !== confirmPassword) {
      setToastifyState({
        ...ToastifyState,
        message: "Passwords does not match",
        variant: "error",
        open: true,
      });
      return setLoading(false);
    }

    const register = await registerUser(user);

    if (register.error) {
      setLoading(false);
      return setToastifyState({
        ...ToastifyState,
        message: register.message,
        variant: "error",
        open: true,
      });
    }
    localStorage.setItem("user", JSON.stringify(register));
    setUserState(register);
    setToastifyState({
      ...ToastifyState,
      message: "Registration Successful",
      variant: "success",
      open: true,
    });
    navigate("/dashboard");
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>FFInvestment | Register</title>
      </Helmet>
      <Navbar />

      <div className="general-container">
        <Background text="REGISTER" />
        <div className="body">
          <form onSubmit={handleSubmit} className="signup-form">
            <h2>REGISTER FORM</h2>
            <div>
              <input
                type="text"
                value={user.referral}
                onChange={(e) => setUser({ ...user, referral: e.target.value })}
                placeholder="Referral ID"
              />
              <input
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Enter your Username"
                required
              />
            </div>
            <div>
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                placeholder="Enter your Name"
                required
                className="name"
                style={{ marginRight: "0px" }}
              />
            </div>
            <div>
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Enter your Email"
                required
              />
              <input
                type="number"
                value={user.phoneNumber}
                onChange={(e) =>
                  setUser({ ...user, phoneNumber: e.target.value })
                }
                placeholder="Enter your Phone Number"
                required
              />
            </div>
            <div>
              <input
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Enter your Password"
                required
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your Passwrod"
                required
              />
            </div>
            <button disabled={loading}>
              {loading ? "LOADING..." : "REGISTER"}
            </button>
            <section style={{ marginTop: "20px" }}>
              <small>
                Already have an account? <Link to="/login">Login</Link>
              </small>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
