import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <div className="justify-center gap-12 flex ">
      <button
        onClick={() => router.push("/world")}
        className="border-solid border-2 p-2"
      >
        World clock{" "}
      </button>
      <button
        onClick={() => router.push("/stop")}
        className="border-solid border-2 p-2"
      >
        Stopwatch
      </button>
      <button
        onClick={() => router.push("/timer")}
        className="border-solid border-2 p-2"
      >
        Time
      </button>
    </div>
  );
}
export default Header;
