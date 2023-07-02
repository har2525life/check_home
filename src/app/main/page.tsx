import Header from "@/components/Header";
import React from "react";

export default function MainPage() {
  return (
    <>
      <Header />
      <div className="flex justify-center align-center w-full h-10 bg-blue-400">
        <h1>2023 / 07 / 03</h1>
      </div>
      <div className="mx-5">
          <h1>未確認</h1>
          <input type="checkbox" name="checkbox" id="checkbox" />
          <label htmlFor="checkbox">玄関の戸締り</label>
      </div>
      <div className="w-full absolute bottom-0 px-5 flex justify-between align-center h-10 border-t-2">
        <p>確認済み</p>
        <p>2件</p>
      </div>
    </>
  );
}
