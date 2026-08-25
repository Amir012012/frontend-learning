const ProfileCard = () => {
  const name = "Amir hossein karami";
  const age = 25;
  const habbit = ["riding book", "programming", "persiant languege"];

  return (
    <div
      className=""
      style={{
        backgroundColor: "lightgreen",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "60%",
        height: "500px",
        margin: "90px auto",
        borderRadius: "10px",
        border: "2px solid black",
        fontSize: "25px",
      }}
    >
      <h1>Name:{name}</h1>
      <h2>Age:{age}</h2>
      <h3>
        Habbit:
        {habbit.map((item) => (
          <div>---------{item}---------</div>
        ))}
      </h3>
    </div>
  );
};

export default ProfileCard;
