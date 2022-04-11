import { Select as AntSelect } from "antd";
import "antd/dist/antd.css";

const Select = ({ data, placeholder, setValue }) => {
  const { Option } = AntSelect;
  return (
    <AntSelect
      placeholder={placeholder}
      style={{ width: "100%" }}
      onChange={(e) => setValue(e)}
      bordered={false}
    >
      {data.map((item, i) => (
        <Option value={i} key={i} setValue>
          {item.title}
        </Option>
      ))}
      {/* full name, address, state ,  */}
    </AntSelect>
  );
};

export default Select;
