import BookmarkIcon from "@mui/icons-material/Bookmark";
import {AddFeatureProps} from "./types";
import {Repository} from "../model/types";
import {featureListStore} from "../model/featureListStore";
import {useState} from "react";
import {Button} from "./Button";

export const AddFeature = ({id, logoUrl, title, starsAmount, forksAmount, linkUrl}: AddFeatureProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [featureListState] = useState(() => featureListStore);

  const handleClick = () => {
    setIsClicked(true);
    featureListState.addFeature({id, logoUrl, title, starsAmount, forksAmount, linkUrl} as Repository);
  };

  return (
    <Button disabled={isClicked} onClick={handleClick} style={{opacity: isClicked ? 0.5 : 1}}>
      <BookmarkIcon />
    </Button>
  );
};
