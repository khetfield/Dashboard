import * as React from "react";
import Box from "@mui/material/Box";
import { CardContent, List, ListItem, ListItemText } from "@mui/material";

export default function ScrollList({ mockTransactions }) {
  return (
    <Box id={"ScrollCard"}>
      <CardContent>
        <h3 id={"Recent"}>Recent Transactions</h3>
      </CardContent>
      <List>
        {mockTransactions.map((i) => (
          <ListItem key={i.key}>
            <ListItemText primary={i.txId}/>
            <ListItemText
              primary={i.user}
              sx={{ color: "orange" }}
            />
            <ListItemText primary={i.date}/>
            <ListItemText
              primary={i.cost}
              id={"Cost"}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
