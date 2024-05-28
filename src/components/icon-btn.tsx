import * as React from "react";
import IconButton from "@mui/material/IconButton";

type IconBtnProps = {
  children: React.ReactNode;
  ariaLabel: string;
};

export default function IconBtn({ children, ariaLabel }: IconBtnProps) {
  return (
    <div className="mui-con-style">
      <IconButton aria-label={ariaLabel} sx={{}}>
        {children}
      </IconButton>
    </div>
  );
}
