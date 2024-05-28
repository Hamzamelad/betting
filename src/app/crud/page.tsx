"use client";

import React from "react";
import { Button } from "@mui/material";

const Page = () => {
  const handle = async () => {
    const res = await fetch("http://localhost:3000/api/competition/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        competitionId: "clwnco4a6000094eq4ne5dt3g",
        odds: [
          "1_1 wins",
          "x_Draw",
          "2_2 wins",
          "1x_1 wins or draw",
          "12_1 or 2 wins",
          "2x_2 wins or draw",
        ],
      }),
    });

    const json = await res.json();
    console.log(json);
  };

  return (
    <div>
      <Button onClick={handle}>handle</Button>
    </div>
  );
};

export default Page;
