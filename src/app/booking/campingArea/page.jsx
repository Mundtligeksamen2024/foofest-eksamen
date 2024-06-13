"use client";
import { useState } from "react";
import { Bowlby_One } from "next/font/google";
import { useSearchParams } from "next/navigation";

import CampingTickets from "@/app/components/Tickets/CampingTickets";
import RemoveTent from "@/app/components/Buttons/RemoveTent";
import AddTent from "@/app/components/Buttons/AddTent";
import ChooseTicket from "@/app/components/ChooseTicket";
import { Breadcrumb } from "antd";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const items = [
  { label: "Home", path: "/" },
  { label: "Tickets", path: "/booking/tickets" },
  { label: "Camping Area", path: "/booking/campingArea" },
];

const campingAreas = [
  { area: "Svartheim", spots: 400, available: 0 },
  { area: "Nilfheim", spots: 300, available: 274 },
  { area: "Helheim", spots: 100, available: 17 },
  { area: "Muspelheim", spots: 200, available: 114 },
  { area: "Alfheim", spots: 250, available: 79 },
];

const CampingAreaOptions = ({ handleCampingArea }) => (
  <div className="grid xl:grid-cols-3 gap-5 text-White">
    {campingAreas.map(({ area, spots, available }) => (
      <label key={area} className="hover:text-Hotpink text-xl mt-2">
        <input
          className="w-5 h-5"
          value={area}
          onChange={handleCampingArea}
          type="radio"
          name="area"
          disabled={available === 0}
        />{" "}
        {area} <br /> <span className="text-sm">{available}/{spots}</span> available
      </label>
    ))}
  </div>
);

const TentOptions = ({
  tentCount,
  setTentCount,
  label,
  price,
  maxTents = 10,
}) => {
  const handleAddTent = () => {
    if (tentCount < maxTents) setTentCount(tentCount + 1);
  };

  const handleRemoveTent = () => {
    if (tentCount > 0) setTentCount(tentCount - 1);
  };

  return (
    <div className="grid 2xl:flex 2xl:gap-24">
      <div className="text-White">
        <h2 className="text-xl text-White">
          <span className="font-bold text-Hotpink">{label}</span> PERSON TENT
        </h2>
        <p>{price} DKK</p>
      </div>
      <div className="flex flex-row gap-3 h-6 items-center mt-4 mb-5 2xl:ml-4">
        <RemoveTent onRemoveTentClick={handleRemoveTent} />
        <input
          name={`${label.toLowerCase()}TentTicket`}
          value={tentCount}
          className="border-solid border-2 border-Lightpink rounded-full w-32 bg-White p-2"
          readOnly
        />
        <AddTent onAddTentClick={handleAddTent} />
      </div>
    </div>
  );
};

const TicketSummary = ({
  twoTentTicket,
  threeTentTicket,
  campingArea,
}) => (
  <div className="grid gap-5">
    <div className="xl:mr-44">
      <CampingTickets
        tentTicket={twoTentTicket}
        tentPrice={299}
        threeTentTicket={threeTentTicket}
        threeTentPrice={399}
        campingArea={campingArea}
      />
    </div>
    <ChooseTicket />
  </div>
);

export default function Home() {
  const searchParams = useSearchParams();
  const regular = searchParams.get("ticketcount1");
  const vip = searchParams.get("ticketcount2");

  const [twoTentTicket, setTwoTentTicket] = useState(0);
  const [threeTentTicket, setThreeTentTicket] = useState(0);
  const [campingArea, setCampingArea] = useState("");

  const handleCampingArea = (e) => {
    setCampingArea(e.target.checked ? e.target.value : "");
  };

  return (
    <>
      <div>
        <Breadcrumb items={items} />
      </div>
      <form action="/booking/guestInformation">
        <input type="hidden" name="ticketcount1" value={regular} />
        <input type="hidden" name="ticketcount2" value={vip} />

        <div className="w-11/12 p-3 border-solid border-Hotpink border-2 xl:px-20 xl:py-8 lg:w-9/12 m-auto mt-28 xl:mb-28">
          <h1 className={`text-White text-2xl mb-10 md:mb-0 lg:text-4xl ${BowlbyOne.className}`}>
            CAMPING AREA
          </h1>
          <div className="grid gap-10 md:flex md:justify-between">
            <div>
              <h2 className="text-White sm:text-base xl:text-2xl font-bold mb-5">
                CHOOSE YOUR CAMPING AREA
              </h2>
              <CampingAreaOptions handleCampingArea={handleCampingArea} />
              <br />

              <h2 className="text-White text-2xl mb-5 mt-10 font-bold">TENTS</h2>
              <TentOptions
                tentCount={twoTentTicket}
                setTentCount={setTwoTentTicket}
                label="2"
                price="299"
              />
              <br />
              <TentOptions
                tentCount={threeTentTicket}
                setTentCount={setThreeTentTicket}
                label="3"
                price="399"
              />
              <br />
            </div>
            <TicketSummary
              twoTentTicket={twoTentTicket}
              threeTentTicket={threeTentTicket}
              campingArea={campingArea}
            />
          </div>
        </div>
      </form>
    </>
  );
}
