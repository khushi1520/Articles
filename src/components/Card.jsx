// import React from 'react'
import PropTypes from "prop-types";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useState } from "react";

function Card({ notes, size, reference, msg }) {
  const [save, setSave] = useState(false);

  const handleSave = () => {
    if (save === false) {
      setSave(true);
      const message = "Note Saved";
      msg(message);
    } else {
      setSave(false);
      const message = "Note UnSaved";
      msg(message);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([notes], { type: "text/plain" });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "Note.txt";

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
  };

  return (
    <>
      <div>
        <motion.div
          drag
          whileDrag={{ scale: 1.2 }}
          dragConstraints={reference}
          dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
          className="relative w-60 h-72 text-white  bg-zinc-600 rounded-[30px] px-4 py-5 overflow-hidden"
        >
          <FaRegFileAlt className="text-xl" />
          <p className="text-md mt-4 text-justify tracking-tight leading-5">
            {notes}
          </p>
          <div className="footer absolute w-full bottom-0 left-0 ">
            <div className="flex justify-between px-4 py-2 ">
              <p className="text-sm">{size}</p>
              <button onClick={handleSave}>
                {save ? <FaBookmark /> : <FaRegBookmark />}
              </button>
            </div>
            <div
              className="bg-blue-500 w-full px-4 py-2 select-none cursor-pointer flex justify-center "
              onClick={handleDownload}
            >
              <p>Download &nbsp;</p>{" "}
              <MdOutlineFileDownload className="text-2xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

Card.propTypes = {
  notes: PropTypes.string,
  size: PropTypes.string,
  reference: PropTypes.object,
  msg: PropTypes.object,
};

export default Card;
