import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 80px;
  background-color: blue;
  color: white;
  border-radius: 8px;
  font-weight: bold;
`

export default function App() {
  return (
    <div className="App">
      <h1>Login</h1>
      <Button />
    </div>
  );
}