import title from "../img/Software engineer-cuate.png";
export default function WebDev() {
  return (
    <>
      <div
        className="App"
        id="head"
        style={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
      >
        <div style={{ fontFamily: "Poppins" }}>
          <h1>Web Dev Resources</h1>
          <img src={title} alt="title" width="200px" />
        </div>
      </div>
      <div className="App"></div>
    </>
  );
}