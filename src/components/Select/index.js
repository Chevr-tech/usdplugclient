import { Select as AntSelect } from "antd";
import "antd/dist/antd.css";

const Select = ({ data, placeholder, setValue, showSearch }) => {
  const { Option } = AntSelect;
  return (
    <AntSelect
      placeholder={placeholder}
      style={{ width: "100%" }}
      onChange={(e) => setValue(e)}
      bordered={false}
      showSearch={showSearch}
    >
      {data.map((item, i) => (
        <Option value={i} key={i}>
          {item.title}
        </Option>
      ))}
      {/* full name, address, state ,  */}
    </AntSelect>
  );
};

export default Select;
