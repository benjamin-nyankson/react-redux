import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);

  return (
    <div className="App-header">
      {amount > 0 ? (
        <h1 style={{ color: "lime" }}>You have {amount} GHC in your account</h1>
      ) : amount === 0 ? (
        <h1 style={{ color: "white" }}>
          You have {amount} GHC in your account
        </h1>
      ) : (
        <h1 style={{ color: "red" }}>You have {amount} GHC in your account</h1>
      )}

      <button onClick={() => setAmount(amount + 1)}>Deposit</button>
      <button onClick={() => setAmount(amount - 1)}>Withdraw</button>
    </div>
  );
}

export default App;
