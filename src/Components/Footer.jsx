import { useEffect, useState } from "react";

const Footer = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <footer className="bg-black py-2 text-center font-CairoPlay text-white shadow-2xl">
      Sanjeet &nbsp;
      {date.toLocaleDateString()}
      &nbsp;
      {date.toLocaleTimeString()}
    </footer>
  );
};

export default Footer;
