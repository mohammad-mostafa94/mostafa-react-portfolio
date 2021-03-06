import React from 'react';
// import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;

  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    font-color:#0000
    .main {
      font-size: 50px;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;
const TitleMessage = () => {
  return (
    <MyTitleMessage>
      <div className="">

        <div className="">
          <div className=" ">
            {/* This is
          <br /> */}
            <span>
              {/* <strong>MD.Golam Mostafa</strong> */}
            </span>
          </div>
          <div className="">
            {/* <Typewriter
              options={{
                // strings: ["React Web Developer", "Learning with programming hero",' '],
                // autoStart: true,
                // loop: true,
                // delay: 50
              }}
            /> */}
          </div>

        </div>
      </div>
    </MyTitleMessage>
  );
};

export default TitleMessage;