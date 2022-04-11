import { data } from "./data";
import "./style.css";
import { motion } from "framer-motion";

const TokenDropdown = ({ token, setToken, closeDD }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      className="td"
    >
      {data.map((item, _) => (
        <div
          className="td-item p-2"
          key={item.id}
          onClick={() => {
            setToken(item);
            closeDD(false);
          }}
        >
          <div className="td-img_cover">
            <img src={item.image} alt="" className="td-img" />
          </div>
          <div className="td-details">
            <div className="td-symbol">{item.symbol}</div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default TokenDropdown;
