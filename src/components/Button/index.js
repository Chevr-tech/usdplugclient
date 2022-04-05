import { css } from "@emotion/react";
import { PulseLoader } from "react-spinners";
import { color } from "../../constants/color";

export const Button = ({
  height,
  bg,
  text,
  width,
  fontSize,
  border,
  textColor,
  status,
  loaderColor,
  loaderSize,
}) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <div
      style={{
        width: width || "100%",
        height: height || "45px",
        borderRadius: "3px",
        background: bg,
        boxShadow: "0 2px 3px #eeeeeede",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        border: border,
      }}
    >
      {status ? (
        <PulseLoader
          color={loaderColor || "#3f3f3f"}
          loading={true}
          css={override}
          size={loaderSize || 8}
        />
      ) : (
        <div
          style={{
            color: textColor || color.baseColor,
            fontSize: fontSize || "12px",
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};
