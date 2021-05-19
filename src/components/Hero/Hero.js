import React, { useEffect, useState } from "react";
import LandingPage from "../LandingPage/Landingpage";
import "./Hero.css";
const API = `https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20`;
function Hero(props) {
  const { setSelectedCard, selectedCard } = props;
  const [data, setData] = useState();
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((response) => {
        setData(response.results);
        console.log(response.results);
      });
  }, []);
  return (
    <>
      <div className="head">
        <div className="head-body">
          <div className="avatar">
            <img src={selectedCard && selectedCard.picture.large} alt="" />
          </div>
          {selectedCard ? (
            <div className="details">
              {" "}
              <div className="name">
                <span> {selectedCard && selectedCard.name.title}</span>
                <span> {selectedCard && selectedCard.name.first}</span>
                <span> {selectedCard && selectedCard.name.last}</span>
              </div>
              <div className="address">
                <span style={{ color: "#A259FF" }}>
                  {" "}
                  {selectedCard && selectedCard.location.street.number}
                </span>
                ,
                <span>
                  {" "}
                  {selectedCard && selectedCard.location.street.name}
                </span>
                ,<span> {selectedCard && selectedCard.location.city}</span>,
                <span style={{ fontWeight: "700" }}>
                  {" "}
                  {selectedCard && selectedCard.location.state}
                </span>
                ,<span> {selectedCard && selectedCard.location.postcode}</span>,
                <span>
                  {" "}
                  {selectedCard &&
                    selectedCard.location.timezone.offset + " - "}
                </span>
                <span style={{ textDecorationLine: "underline" }}>
                  {selectedCard && selectedCard.location.timezone.description}
                </span>{" "}
                <span>
                  {" "}
                  <i>{selectedCard && selectedCard.location.country}</i>
                </span>
                ,
                <br />
                <span style={{ textTransform: "capitalize", opacity: "0.5" }}>
                  {" "}
                  {selectedCard && selectedCard.gender}
                </span>
              </div>
            </div>
          ) : (
            <p>Loading..</p>
          )}
        </div>
      </div>{" "}
      <div className="container">
        {data && data.length > 0 ? (
          data.map((info, i) => (
            <>
              <LandingPage
                info={info}
                key={i}
                setSelectedCard={setSelectedCard}
                selectedCard={selectedCard}
              />
              {!selectedCard ? setSelectedCard(info) : null}
            </>
          ))
        ) : (
          <p>Loading..</p>
        )}
      </div>
    </>
  );
}

export default Hero;
