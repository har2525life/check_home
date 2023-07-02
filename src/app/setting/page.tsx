import Header from "@/components/Header";
import React from "react";

export default function SettingPage() {
  return (
    <>
      <Header />
      <div className="h-10 bg-blue-400">
        <h1 className="text-center">設定</h1>
      </div>
      <div className="mx-5">
        <div className="">
          <h1>追加項目</h1>
          <input
            type="text"
            placeholder="窓の戸締り"
            className="rounded h-10 border w-full mt-2"
          />
          <button className="w-full bg-blue-600 text-white h-8 mt-2 rounded">
            ADD
          </button>
        </div>
        <div className="mt-4">
          <h1>現在の設定</h1>
          <ul className="mt-2">
            <li>窓の戸締り</li>
          </ul>
        </div>
      </div>
    </>
  );
}
