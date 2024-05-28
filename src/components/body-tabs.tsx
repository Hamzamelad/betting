"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { betPages } from "@/assets/consts";
import { useRouter, usePathname } from "next/navigation";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export function CustomizedMenus({ current, setCurrent }: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const router = useRouter();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChoose = (event: React.MouseEvent<HTMLElement>) => {
    setCurrent(event.currentTarget.tabIndex);
    handleClose();
  };

  React.useEffect(() => {
    router.push(betPages[current].href);
  }, [current]);

  return (
    <div>
      <Button
        id="demo-customized-button"
        style={{ backgroundColor: "white" }}
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="text"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {betPages[current].name}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {betPages.map((el, ind) => (
          <MenuItem tabIndex={ind} onClick={handleChoose} disableRipple>
            {el.name}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}

export function ScrollableTabsButtonAuto({ current }: any) {
  const [value, setValue] = React.useState(0);
  const pathName = usePathname();
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // React.useEffect(() => {
  //   if (pathName === `/sports/${betPages[current]}`) setValue(0)
  //   else if (pathName === '/sports/tennis') setValue(1)
  //   else setValue(2)
  // }, [pathName])

  return (
    <Box sx={{ flex: 1, bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {betPages[current].tabs?.map((el, ind) => (
          <Tab
            key={el.name}
            label={el.name}
            onClick={() => router.push(`${el.href}`)}
          />
        ))}
      </Tabs>
    </Box>
  );
}

export default function BodyNavBar() {
  const [current, setCurrent] = React.useState<number>(0);

  return (
    <div className="flex bg-white border-b pl-4">
      <div className="flex items-center justify-center">
        <CustomizedMenus current={current} setCurrent={setCurrent} />
      </div>
      <div className="my-1 mx-2 border-l"></div>
      <ScrollableTabsButtonAuto current={current} />
    </div>
  );
}
