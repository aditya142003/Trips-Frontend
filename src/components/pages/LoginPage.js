import React, { useState, useEffect, useContext } from "react";
import LandingImage from "../Image/LandingImage.jpg";
import { GetFetch, PostFetch } from "../../api/Fetch";
import config from "../../config";
import Loading from "../atoms/Loading";
import DataContext from "../../context/DataContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [bgImage, setBgImage] = useState();
  const [loading, setLoading] = useState(true);
  const [errorMsgLogin, seterrorMsgLogin] = useState(false);
  const [errorMsgForgot, seterrorMsgForgot] = useState(false);
  const [errorMsgToken, seterrorMsgToken] = useState(false);
  const [errorMsgpassShort, seterrorMsgpassShort] = useState(false);
  const [forMsg, setforMsg] = useState(false);
  const [forgotInfo, setForgotInfo] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    token: "",
  });
  const [loginInfo, setLoginInfo] = useState({
    Identity: "",
    password: "",
  });
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const nav = useNavigate();

  useEffect(() => {
    if (config.WORKING != "developer") {
      fetchingBGImage();
    } else {
      setBgImage(LandingImage);
      setLoading(false);
    }
  }, []);

  const fetchingBGImage = async () => {
    const rawResponse = await fetch(
      `https://api.unsplash.com/photos/random?query=travelling&orientation=portrait&client_id=${config.UNSPLASH_Access_Key}`,
      {
        method: "get",
      }
    );
    const data = await rawResponse.json();
    console.log(data);
    setBgImage(data.urls.regular);
    setLoading(false);
  };

  const inputActive = (e) => {
    inputDeactive();

    e.stopPropagation();
    e.target.parentNode.childNodes[0].style.cssText = `
      top : .5rem;
      font-size : 1.4rem;
      opacity : .8;
      `;
    e.target.parentNode.childNodes[1].style.cssText = `
      caret-color : black;
      `;
  };

  const inputDeactive = () => {
    const labelEles = document.getElementsByClassName("Input__pair--label");
    for (let i = 0; i < labelEles.length; i++) {
      if (labelEles[i].parentNode.childNodes[1].value === "") {
        labelEles[i].style.cssText = `
        top : 1.5rem;
        font-size : 2rem;
        opacity : .7;
      `;
        labelEles[i].parentNode.childNodes[1].style.cssText = `
      caret-color : transparent;
    `;
      }
    }
  };

  const fetchingLoginApi = async () => {
    const data = await PostFetch(
      "POST",
      "http://localhost:3000/api/v1/users/login",
      loginInfo
    );

    if (data.status == "success") {
      nav("/home");
    } else {
      seterrorMsgLogin(true);
    }
  };
  const fetchingSignupApi = async () => {
    if (
      signupInfo.password.length >= 8 &&
      signupInfo.passwordConfirm.length >= 8
    ) {
      const data = await PostFetch(
        "POST",
        "http://localhost:3000/api/v1/users/signup",
        signupInfo
      );
      console.log(data);

      if (data.status == "success") {
        nav("/home");
      }
    } else {
      seterrorMsgpassShort(true);
    }
  };
  const fetchingForgotApi = async () => {
    if (forgotInfo.email) {
      const data = await PostFetch(
        "POST",
        "http://localhost:3000/api/v1/users/forgotPassword",
        forgotInfo
      );
      if (data.status === "success") {
        setforMsg(true);
        setForgotInfo({ ...forgotInfo, email: "" });
      } else {
        seterrorMsgForgot(true);
      }
    } else if (forgotInfo.token && !forgotInfo.email) {
      if (
        forgotInfo.password.length >= 8 &&
        forgotInfo.passwordConfirm.length >= 8
      ) {
        const data = await PostFetch(
          "PATCH",
          `http://localhost:3000/api/v1/users/resetPassword/${forgotInfo.token}`,
          forgotInfo
        );
        if (data.status == "success") {
          toggleForgot();
          setforMsg(false);
          setForgotInfo({
            ...forgotInfo,
            token: "",
            password: "",
            passwordConfirm: "",
          });
        } else {
          seterrorMsgToken(true);
        }
      } else {
        seterrorMsgpassShort(true);
      }
    }
  };

  const submitLoginInfo = () => {
    console.log(loginInfo);
    fetchingLoginApi();
  };
  const submitSignupInfo = () => {
    console.log(signupInfo);
    fetchingSignupApi();
  };
  const submitForgotInfo = () => {
    console.log(forgotInfo);
    fetchingForgotApi();
  };

  const toggleSignUp = () => {
    console.log(
      document.getElementsByClassName("login__divider")[0].style.right
    );
    if (
      document.getElementsByClassName("login__divider")[0].style.right ===
      "80vw"
    ) {
      document.getElementsByClassName("login__divider")[0].style.right = "40vw";
      document.getElementsByClassName("login__container")[0].style.opacity =
        "1";
    } else {
      document.getElementsByClassName("login__divider")[0].style.right = "80vw";
      document.getElementsByClassName("login__container")[0].style.opacity =
        "0";
    }
  };

  const toggleForgot = () => {
    console.log(
      document.getElementsByClassName("login__divider")[0].style.right
    );
    if (
      document.getElementsByClassName("login__divider")[0].style.right === "0vw"
    ) {
      document.getElementsByClassName("login__divider")[0].style.right = "40vw";
      document.getElementsByClassName("forgot__container")[0].style.opacity =
        "0";
    } else {
      document.getElementsByClassName("login__divider")[0].style.right = "0vw";
      document.getElementsByClassName("forgot__container")[0].style.opacity =
        "1";
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="login" onClick={inputDeactive}>
      <div className="login__image">
        <img src={bgImage} />
      </div>
      <div className="login__divider">
        <div className="forgot__container">
          <div className="Input__container">
            <h1 className="login__container--heading">Trips</h1>
            {forMsg ? (
              <>
                <div className="Input__pair">
                  <label className="Input__pair--label">Token</label>
                  <input
                    value={forgotInfo.token}
                    type="text"
                    className="Input__pair--input"
                    onClick={inputActive}
                    onChange={(e) => {
                      setForgotInfo({ ...forgotInfo, token: e.target.value });
                      inputActive(e);
                      inputDeactive();
                      seterrorMsgToken(false);
                    }}
                  />
                </div>
                <div className="Input__pair">
                  <label className="Input__pair--label">Password</label>
                  <input
                    type="password"
                    value={forgotInfo.password}
                    className="Input__pair--input"
                    onClick={inputActive}
                    onChange={(e) => {
                      setForgotInfo({
                        ...forgotInfo,
                        password: e.target.value,
                      });
                      inputActive(e);
                      inputDeactive();
                      seterrorMsgToken(false);
                      seterrorMsgpassShort(false);
                    }}
                  />
                </div>
                <div className="Input__pair">
                  <label className="Input__pair--label">Password Confirm</label>
                  <input
                    type="password"
                    value={forgotInfo.passwordConfirm}
                    className="Input__pair--input"
                    onClick={inputActive}
                    onChange={(e) => {
                      setForgotInfo({
                        ...forgotInfo,
                        passwordConfirm: e.target.value,
                      });
                      inputActive(e);
                      inputDeactive();
                      seterrorMsgToken(false);
                      seterrorMsgpassShort(false);
                    }}
                  />
                </div>
                <button
                  className="Button--blue"
                  type="submit"
                  onClick={submitForgotInfo}
                >
                  Reset
                </button>
                {errorMsgToken ? (
                  <div className="IncorrectMsg">Token is incorrect</div>
                ) : (
                  <></>
                )}
                {errorMsgpassShort ? (
                  <div className="IncorrectMsg">
                    Password is too short: Min 8 characters
                  </div>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <>
                <div className="Input__pair">
                  <label className="Input__pair--label">Email address</label>
                  <input
                    value={forgotInfo.email}
                    type="text"
                    className="Input__pair--input"
                    onClick={inputActive}
                    onChange={(e) => {
                      setForgotInfo({ ...forgotInfo, email: e.target.value });
                      inputActive(e);
                      inputDeactive();
                      seterrorMsgForgot(false);
                    }}
                  />
                </div>
                <button
                  className="Button--blue"
                  type="submit"
                  onClick={submitForgotInfo}
                >
                  Submit
                </button>
                {errorMsgForgot ? (
                  <div className="IncorrectMsg">Email not matched</div>
                ) : (
                  <></>
                )}
                <div className="login__container--signup">
                  <div className="login__container--signupText login__container--text">
                    <a onClick={toggleForgot}>Log in</a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="login__container">
          <div className="Input__container">
            <h1 className="login__container--heading">Trips</h1>
            <div className="Input__pair">
              <label className="Input__pair--label">
                Username or email address
              </label>
              <input
                type="text"
                className="Input__pair--input"
                onClick={inputActive}
                onChange={(e) => {
                  setLoginInfo({ ...loginInfo, Identity: e.target.value });
                  inputActive(e);
                  inputDeactive();
                  seterrorMsgLogin(false);
                }}
              />
            </div>
            <div className="Input__pair">
              <label className="Input__pair--label">Password</label>
              <input
                type="password"
                className="Input__pair--input"
                onClick={inputActive}
                onChange={(e) => {
                  setLoginInfo({ ...loginInfo, password: e.target.value });
                  inputActive(e);
                  inputDeactive();
                  seterrorMsgLogin(false);
                }}
              />
            </div>
            <button
              className="Button--blue"
              type="submit"
              onClick={submitLoginInfo}
            >
              Log in
            </button>
            {errorMsgLogin ? (
              <div className="IncorrectMsg">
                Username or password is incorrect
              </div>
            ) : (
              <></>
            )}

            <div
              className="login__container--text forgetPass"
              onClick={toggleForgot}
            >
              Forgotten your password?
            </div>
            <div className="login__container--signup">
              <div className="login__container--signupText login__container--text">
                Don't have an account? <a onClick={toggleSignUp}>Sign up</a>
              </div>
            </div>
          </div>
        </div>
        <div className="signUp__container">
          <div className="Input__container">
            <h1 className="login__container--heading">Trips</h1>
            <div className="Input__pair">
              <label className="Input__pair--label">Email address</label>
              <input
                type="text"
                className="Input__pair--input"
                onClick={inputActive}
                onChange={(e) => {
                  setSignupInfo({ ...signupInfo, email: e.target.value });
                  inputActive(e);
                  inputDeactive();
                }}
              />
            </div>
            <div className="Input__pair">
              <label className="Input__pair--label">Full Name</label>
              <input
                type="text"
                className="Input__pair--input"
                onClick={inputActive}
                onChange={(e) => {
                  setSignupInfo({ ...signupInfo, fullName: e.target.value });
                  inputActive(e);
                  inputDeactive();
                }}
              />
            </div>
            <div className="Input__pair">
              <label className="Input__pair--label">Username</label>
              <input
                type="text"
                className="Input__pair--input"
                onClick={inputActive}
                onChange={(e) => {
                  setSignupInfo({ ...signupInfo, username: e.target.value });
                  inputActive(e);
                  inputDeactive();
                }}
              />
            </div>
            <div className="Input__pair">
              <label className="Input__pair--label">Password</label>
              <input
                type="password"
                className="Input__pair--input"
                onClick={inputActive}
                onChange={(e) => {
                  setSignupInfo({ ...signupInfo, password: e.target.value });
                  inputActive(e);
                  inputDeactive();
                  seterrorMsgpassShort(false);
                }}
              />
            </div>
            <div className="Input__pair">
              <label className="Input__pair--label">Password Confirm</label>
              <input
                type="password"
                className="Input__pair--input"
                onClick={inputActive}
                onChange={(e) => {
                  setSignupInfo({
                    ...signupInfo,
                    passwordConfirm: e.target.value,
                  });
                  inputActive(e);
                  inputDeactive();
                  seterrorMsgpassShort(false);
                }}
              />
            </div>
            <button className="Button--blue" onClick={submitSignupInfo}>
              Sign up
            </button>
            {errorMsgpassShort ? (
              <div className="IncorrectMsg">
                Password is too short: Min 8 characters
              </div>
            ) : (
              <></>
            )}
            <div className="login__container--signup">
              <div className="login__container--signupText login__container--text">
                Already have an account?{" "}
                <a style={{ opacity: "1" }} onClick={toggleSignUp}>
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
