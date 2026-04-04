import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

function NotFound() {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    const timeoutID = setTimeout(async () => {
      if (secondsLeft > 1) {
        setSecondsLeft((secondsLeft) => {
          return secondsLeft - 1;
        });
      } else {
        await navigate({ to: "/" });
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [navigate, secondsLeft]);

  return (
    <div className="flex grow flex-col items-center justify-center gap-y-8 p-8 sm:p-16">
      <span className="text-center text-7xl font-black text-red-700 sm:text-9xl">
        404
        <br />
        Not found!
      </span>
      <span className="text-center text-4xl font-medium sm:text-5xl">
        Redirecting back to home in{" "}
        <span className="font-bold text-blue-700">{secondsLeft}</span> second
        {secondsLeft != 1 ? "s" : ""}...
      </span>
    </div>
  );
}

export default NotFound;
