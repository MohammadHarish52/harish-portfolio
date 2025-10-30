const RotatingText = ({ texts, className }) => {
  // Display the first text statically
  const displayText = texts && texts.length > 0 ? texts[0] : "";

  return (
    <h1
      className={`name rotating-text-fade-in ${className}`}
      style={{ 
        opacity: 0,
        transform: "translateY(-100px)"
      }}
    >
      {displayText}
    </h1>
  );
};

export default RotatingText;

