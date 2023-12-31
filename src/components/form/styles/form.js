import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 560px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 40px 68px 40px;
  margin-bottom: 100px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #737373;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: white;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background: #8b0000;
  }

  &:active {
    background: #ff0000;
  }

  &:focus {
    outline: none;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    margin: 10px 0 20px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
    padding: 15px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
    padding: 10px;
  }

  @media (max-width: 280px) {
    font-size: 10px;
    padding: 5px;
  }
`;

export const Link = styled(ReactRouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
