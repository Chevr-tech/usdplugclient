import { CgClose } from "react-icons/cg";
import { color } from "../../constants/color";

const CloseBtn = ({ setCloseBtn }) => {
  return (
    <div className={"close-btn"} onClick={() => setCloseBtn(false)}>
      <CgClose size={15} color={color.dark} />
    </div>
  );
};

export default CloseBtn;
