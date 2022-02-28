import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withdraw2, withdraw1 } from "./BankinfoSlice";
import "./Bankinfo.css";
import formatNumber from "format-number";

export function Withdraw() {
  const username = "janne forester";

  const totalAmount = useSelector((state) => state.Withdraw.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <img
        className="App__userpic"
        src={"https://image.ibb.co/nC8vGp/girl.png"}
        alt="photographer"
      />
      <p className="App__username">Hello, {username}! </p>
      <div className="App__amount">
        {formatNumber({ prefix: "$" })(totalAmount)}
        <p className="App__amount--info">Total Amount</p>
      </div>

      <section className="App__buttons">
        <button
          aria-label="withdraw1 value"
          onClick={() => dispatch(withdraw1())}
        >
          WITHDRAW $10,000
        </button>

        <button
          aria-label="withdraw2 value"
          onClick={() => dispatch(withdraw2())}
        >
          WITHDRAW $5,000
        </button>
      </section>

      <p className="App__giveaway">Give away all your cash to charity</p>
    </div>
  );
}

//
