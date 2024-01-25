import { useState } from "react";

function stop() {
  const [time, setTime] = useState(0);

  setInterval(() => setTime(time+1), 1000);


//   Math

  return (
    <div className="flex flex-col gap-8 text-center justify-center">
      <div className="flex justify-center">
        <p>00:</p>
        <p>00:</p>
        <p>{time}</p>
      </div>
      <div className="flex justify-center gap-3 ">
        <button className="border-solid border-2 p-2">
          <p>start</p>
        </button>
        <button className="border-solid border-2 p-2">
          <p>reset</p>
        </button>
        <button className="border-solid border-2 p-2">
          <p>stop</p>
        </button>
      </div>
    </div>
  );
}
export default stop;
