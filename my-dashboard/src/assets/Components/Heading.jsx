import { Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <>
      <Typography variant="h2" component="div" sx={{ flexGrow: 1 }} id={"Head"}>
        DASHBOARD
      </Typography>
      <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} id={"Subhead"}>
        Welcome to Your Dashboard
      </Typography>
    </>
  );
}