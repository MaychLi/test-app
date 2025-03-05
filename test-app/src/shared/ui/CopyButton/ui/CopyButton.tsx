import copy from "clipboard-copy";
import {Button} from "@mui/material";
import {CopyButtonProps} from "./types";

export const CopyButton = ({textToCopy}: CopyButtonProps) => {
  const handleClick = () => copy(textToCopy);

  return (
    <Button variant="contained" onClick={handleClick}>
      Copy
    </Button>
  );
};
