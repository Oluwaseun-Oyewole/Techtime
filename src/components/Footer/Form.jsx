import React, { useState, useEffect } from "react";
import { Button } from "..";
import styled from "styled-components";
import tw from "twin.macro";

const Input = styled.input`
  ${tw`p-2`};
  border: 1px #054fb3 solid;
  outline: none;
  background: #424141;
`;

export const Form = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const messageValidator = (name) => {
    if (!name) setError("Message is requied");
    else if (name?.length < 5)
      setError("Message must be at least 5 characters");
    else {
      setError("");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setSuccess("");
    }, 2000);
  }, [success]);

  const changeHandler = (e) => {
    setMessage(e.target.value);
    messageValidator(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) setError("Please fill in the form to subscribe");
    else {
      setMessage("");
      setSuccess("You have subscribed to our newsletter");
    }
  };

  return (
    <div>
      <form className="flex items-center w-[100%]" onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            name=""
            placeholder="nft123@gmail.com"
            onChange={changeHandler}
            value={message}
          />
        </div>

        <Button
          children="Send Message"
          primary="#054FB3"
          paddingX={10.7}
          paddingY={20}
          border={1.5}
          isBorder={false}
          mediaQuery={true}
        />
      </form>
      <p className="text-red-400 pt-2">{error}</p>
      <p className="text-green-400">{success}</p>
    </div>
  );
};
