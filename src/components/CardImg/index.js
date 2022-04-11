const CardImg = ({ alt, width, height, img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        className="cbd-image__cover mb-3"
        style={{
          width: width || "30px",
          height: height || "30px",
        }}
      >
        <img
          src={img}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default CardImg;
