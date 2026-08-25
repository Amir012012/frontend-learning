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
       

        width: "60%",
        height: "500px",
        margin: "90px auto",

        borderRadius: "10px",
        border: "2px solid rgb(10, 120, 145)",

        fontSize: "25px",
      }}
    >
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h1>Name:{name}</h1>
        <h2>Age:{age}</h2>
      </div>
      <h3
        className=""
        style={{
          borderRadius: "0px 50px 0px 80px ",
          border: "2px dashed black",
          padding: "50px",
        }}
      >
        Habbit:
        {habbit.map((item) => (
          <div>---------{item}---------</div>
        ))}
      </h3>
    </div>
  );
};

export default ProfileCard;
