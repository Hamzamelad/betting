"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import CustomizedTables from "./table";
import { db } from "@/lib/db";

const tabs = [
  ["La Liga", "Premier League", "Pondes League"],
  ["Roland Garros", "UTR", "Open Tripoli"],
  ["NBA", "Euroleague", "SDD"],
];

const TablesContainer = () => {
  const [data, setData] = useState<(typeof db.competition)[]>([]);
  const pathName = usePathname();

  const getData = async (cat1: string, cat2: string) => {
    const res = await fetch(
      "http://localhost:3000/api/competition?cat1=" + cat1 + "&&cat2=" + cat2,
    );
    const json = await res.json();
    setData(json.data);
    return json;
  };

  useEffect(() => {
    const [_, cat1, cat2] = pathName.split("/");
    getData(cat1.toUpperCase(), cat2);
  }, [pathName]);

  return (
    <div className="mt-6">
      {data.map((el) => (
        <CustomizedTables data={el} />
      ))}
    </div>
  );
};

export default TablesContainer;

// if (pathName === "/sports/football") setData(tabs[0]);
//     else if (pathName === "/sports/tennis") setData(tabs[1]);
//     else setData(tabs[2]);
