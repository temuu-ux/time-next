import { useState } from "react";

function world() {
  const [time, setTime] = useState(new Date());
  //   console.log(time);
  setInterval(() => setTime(new Date()), 1000);

  return (
    <div className="flex flex-col gap-5 text-center justify-center">
      {/* <p>{time.toLocaleDateString()}</p> */}
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}
export default world;
