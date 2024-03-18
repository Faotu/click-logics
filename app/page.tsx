import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center text-white justify-center h-screen px-2">
      <h1 className="text-5xl font-bold mb-20">FUPRE AI</h1>
      <div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <h2 className="">Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain something to me</p>
            <p className="infoText">
              What is the different between a dog and a cat
            </p>
            <p className="infoText">What is the colour of the sun</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
