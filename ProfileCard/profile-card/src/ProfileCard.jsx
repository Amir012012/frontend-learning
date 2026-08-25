const ProfileCard = () => {
  const name = "Amir hossein karami";
  const age = 25;
  const habbit = ["riding book", "programming", "persiant languege"];

  return (
    <div
      className=""
      style={{
        backgroundColor: "rgba(73, 219, 73, 0.82)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",

        width: "60%",
        height: "500px",
        margin: "90px auto",

        borderRadius: "10px",
        border: "2px solid rgb(10, 120, 145)",

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
