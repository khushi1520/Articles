import { useRef } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import articles from "../Data";

function Fgcard({ msg }) {
  const ref = useRef(null);
  return (
    <>
      <div ref={ref} className=" fixed top-0 left-0 w-full h-full z-[3] ">
        <div className="mt-5 grid grid-cols-4 w-[80%] ml-auto mr-auto">
          {articles.map((note) => (
            <Card
              key={note.id}
              notes={note.title}
              size={note.size}
              reference={ref}
              msg={msg}
            />
          ))}
        </div>
      </div>
    </>
  );
}

Fgcard.propTypes = {
  msg: PropTypes.object,
};

export default Fgcard;
