"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import QuantityInput from "./number-input";
import { Stack } from "@mui/material";
import { useAppSelector } from "@/lib/hooks";
import { db } from "@/lib/db";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const Slip = () => {
  const slip = useAppSelector((state) => state.slip);
  const [com, setComp] = React.useState<typeof db.competition | null>(null)

  React.useEffect(() => {
    console.log(slip.event)
  }, [slip])

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="caption"></Typography>


      <Typography variant="subtitle1">{slip?.event?.Competitor[0].name}</Typography>
      <Typography variant="subtitle1">{slip?.event?.Competitor[1].name}</Typography>
      <div className="mt-3">
        <Typography sx={{ marginTop: "16px" }} variant="caption">
          you betted for: {slip?.event?.odds[slip.betOn]}
        </Typography>
      </div>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ marginTop: "8px" }}
      >
        <Typography variant="caption">Overall odds</Typography>
        <Typography variant="subtitle1" color={"ActiveCaption"}>
          {slip?.event?.odds[slip.betOn]}
        </Typography>
      </Box>
      <QuantityInput />
      <div className="mt-2">
        <Typography variant="caption">
          Potential winnings: 3005.sf usd
        </Typography>
      </div>
    </Box>
  );
};

const Bet = () => {
  return (
    <div className="rounded-lg border overflow-hidden mb-3 p-3">
      <Typography variant="caption">tes test test</Typography>
      <Typography variant="subtitle1">real madrid</Typography>
      <Typography variant="subtitle1">real susidad</Typography>
      <div className="mt-2">
        <Stack direction={"row"} spacing={"auto"}>
          <Typography variant="caption">Bet amount</Typography>
          <Typography variant="subtitle2"> 120 usd</Typography>
        </Stack>
        <Stack direction={"row"} spacing={"auto"}>
          <Typography variant="caption">Potential winnings </Typography>
          <Typography variant="subtitle2">320 usd</Typography>
        </Stack>
      </div>
    </div>
  );
};

const Bets = () => {
  return (
    <Box sx={{ p: 3 }}>
      {[...Array(3)].map(() => (
        <Bet />
      ))}
    </Box>
  );
};

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="bg-white"
    >
      {index === 0 && <Slip />}
      {index === 1 && <Bets />}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="rounded-xl border overflow-hidden">
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            backgroundColor: "rgb(2,132,199)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs
            sx={{
              width: "100%",
              "& .MuiTabs-indicator": { backgroundColor: "purple" },
            }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              style={{ color: "white" }}
              sx={{ flex: 1 }}
              label="Item One"
              {...a11yProps(0)}
            />
            <Tab
              style={{ color: "white" }}
              sx={{ flex: 1 }}
              label="Item Two"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
      </Box>
    </div>
  );
}
