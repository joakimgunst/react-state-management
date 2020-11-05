import { motion } from "framer-motion";
import css from "styled-jsx/css";

const LoadingSpinner: React.FC = () => {
  const spinner = css.resolve`
    div {
      background: transparent !important;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      border: 2px solid;
      border-color: #ddd;
      border-bottom-color: transparent;
      display: inline-block;
    }
  `;

  return (
    <div className="wrapper">
      <motion.div
        className={spinner.className}
        initial={false}
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 0.8, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
        }}
      >
        {spinner.styles}
      </motion.div>

      <style jsx>{`
        .wrapper {
          display: flex;
          justify-content: center;
          padding: 8px;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
