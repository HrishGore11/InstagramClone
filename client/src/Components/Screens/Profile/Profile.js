import React from "react";

const Profile = () => {
  return (
    <main
    //   style={{
    //     backgroundColor: "rgba(var(--b3f,250,250,250),1)",
    //   }}
    >
      <div
        style={{
          flexGrow: "1",
          margin: "0 auto 30px",
          maxWidth: "935px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "18px 0px",
          }}
        >
          <div>
            {/* <button
            style={{ width: "150px", height: "150px", borderRadius: "80px" }}
          > */}
            <img
              style={{ width: "140px", height: "140px", borderRadius: "80px" }}
              src="https://res.cloudinary.com/rossi1494/image/upload/v1662214232/jwvvlvjzddrcs2r8wsfd.png"
            ></img>
            {/* </button> */}
          </div>
          <div>
            <h5>Rossi_1494</h5>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "110%",
              }}
            >
              <h6>40 Posts</h6>
              <h6>200 Followers</h6>
              <h6>1000 Following</h6>
            </div>
          </div>
        </div>
        <div className="PostsSavedTagged">
          <img
            className="Posts"
            src="https://res.cloudinary.com/rossi1494/image/upload/v1662214232/jwvvlvjzddrcs2r8wsfd.png"
          ></img>
          <img
            className="Posts"
            src="https://res.cloudinary.com/rossi1494/image/upload/v1662214232/jwvvlvjzddrcs2r8wsfd.png"
          ></img>{" "}
          <img
            className="Posts"
            src="https://res.cloudinary.com/rossi1494/image/upload/v1662214232/jwvvlvjzddrcs2r8wsfd.png"
          ></img>{" "}
          <img
            className="Posts"
            src="https://res.cloudinary.com/rossi1494/image/upload/v1662214232/jwvvlvjzddrcs2r8wsfd.png"
          ></img>{" "}
          <img
            className="Posts"
            src="https://res.cloudinary.com/rossi1494/image/upload/v1662214232/jwvvlvjzddrcs2r8wsfd.png"
          ></img>{" "}
          <img
            className="Posts"
            src="https://res.cloudinary.com/rossi1494/image/upload/v1662214232/jwvvlvjzddrcs2r8wsfd.png"
          ></img>{" "}
          <img
            className="Posts"
            src="https://res.cloudinary.com/rossi1494/image/upload/v1662214232/jwvvlvjzddrcs2r8wsfd.png"
          ></img>{" "}
          <img
            className="Posts"
            src="https://res.cloudinary.com/rossi1494/image/upload/v1662214232/jwvvlvjzddrcs2r8wsfd.png"
          ></img>{" "}
          <img
            className="Posts"
            src="https://res.cloudinary.com/rossi1494/image/upload/v1662214232/jwvvlvjzddrcs2r8wsfd.png"
          ></img>
        </div>
      </div>
    </main>
  );
};

export default Profile;
