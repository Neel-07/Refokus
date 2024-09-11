import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-20 flex flex-col md:flex-row gap-4 md:gap-2 px-4">
        <Card
          width={"w-full md:basis-1/3"}
          start={false}
          para={true}
          heading="Up Next: News"
          text="Insights and behind the scenes"
          team="Explore what drives our team"
        />
        <Card
          width={"w-full md:basis-2/3"}
          start={true}
          para={false}
          hover="true"
          heading="Get In Touch"
          text="Let's get to it, together"
        />
      </div>
    </div>
  );
};

export default Cards;
