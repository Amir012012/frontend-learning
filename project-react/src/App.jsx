const App = () => {
  const name = "Amir Hossein karami";
  const job = "Teacher";
  const age = 25;
  return (
    <div>
      <div
        className="first-name"
        style={{
          backgroundColor: "#339119",
          color: "white",
          fontSize: "29px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          height: "500px",
          borderRadius: "10px",
          border: "5px dashed black",
          flexDirection: "column",
        }}
      >
        <div>name:{name}</div>
        <div>job:{job}</div>
        <div>age:{age}</div>
      </div>
    </div>
  );
};

export default App;
