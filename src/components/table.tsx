"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { setEvent, setBetOn } from "@/lib/features/slip/slip-slice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  bet1: number,
  bet2: number,
  bet3: number,
  bet4: number,
  bet5: number,
  bet6: number,
) {
  return { name, bet1, bet2, bet3, bet4, bet5, bet6 };
}

const rows = [
  {
    cells: createData("madrid vs barcelona", 159, 6.0, 24, 4.0, 0, 1.4),
    eventId: "323",
  },
  {
    cells: createData("madrid vs barcelona", 159, 6.0, 24, 4.0, 0, 1.4),
    eventId: "323",
  },
  {
    cells: createData("madrid vs barcelona", 159, 6.0, 24, 4.0, 0, 1.4),
    eventId: "323",
  },
];

export default function CustomizedTables({ data }: any) {
  const dispatch = useAppDispatch();
  const slip = useAppSelector((state) => state.slip);

  const handleBet = (event: any, bet: number) => {
    dispatch(setEvent(event))
    dispatch(setBetOn(bet))
  }

  React.useEffect(() => {
    console.log(data)
  }, [])

  return (
    <div className="mb-6">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>{data.name}</StyledTableCell>
              {data.bets.map((el: string) => (
                <StyledTableCell align="center">
                  <Tooltip title={el.split("_")[1]}>
                    <span>{el.split("_")[0]}</span>
                  </Tooltip>
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>

            {data.Event.map((row: any) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.Competitor[0].name + " vs " + row.Competitor[1].name}
                </StyledTableCell>

                {row.odds.map((bet: number,ind: number) => (
                  <StyledTableCell align="center">
                    <Button onClick={() => handleBet(row, ind )}>{bet}</Button>
                  </StyledTableCell>
                ))}

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const SingleBet = ({ bet }: any) => {
  const dispatch = useAppDispatch();
  const slip = useAppSelector((state) => state.slip);

  // const newSlip: Slip = {

  //   odd: bet,
  // };

  return (
    <StyledTableCell align="center">
      <Button onClick={() => null}>{bet}</Button>
    </StyledTableCell>
  );
};
