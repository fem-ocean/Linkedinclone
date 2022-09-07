import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { signInAPI } from "../actions";
import React from "react";

const Login = (props) => {
  return (
    <Container>
      {props.user && <Navigate replace to="/home" />}
      <Nav>
        <a href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/135px-LinkedIn_Logo.svg.png"
            alt="linkedinlogo"
          />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>

      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img
            src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
            alt="heroimage"
          />
        </Hero>
        <Form>
          <Google onClick={() => props.signIn()}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdZstnFOO87-aJ43mJ_-R2gGYO8SV9A_GAw&usqp=CAU"
              width="18px"
              alt="google icon"
            />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0px 16px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  padding: 10px 12px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: #0a66c2;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    text-decoration: none;
    color: #0a66c2;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: start;
  min-height: 451px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  margin: auto;
  align-items: center;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;

  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #8f5849;
    font-weight: 100;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    /* z-index: -1; */
    width: 600px;
    height: 500px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: 400px;
      position: initial;
      height: initial;
      margin-top: 40px;
    }
  }
`;

const Form = styled.div`
  /* margin-top: 100px; */
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 50px;
    justify-self: center;
  }
`;

const Google = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0/ 0%),
    inset 0 0 0 1px rgb(0 0 0 / 0%);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(201, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);

  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});

// https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4

export default connect(mapStateToProps, mapDispatchToProps)(Login);
