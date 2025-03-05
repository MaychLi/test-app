import {Typography} from "@mui/material";
import {RepositoryCard, featureListStore} from "@/entities/RepositoryCard";
import {useState} from "react";
import {observer} from "mobx-react-lite";
import {ListWrapper} from "@/shared/ui";

export const FeatureList = observer(() => {
  const [featureListState] = useState(() => featureListStore);

  const ui = featureListState.repositories?.map(({description, id, ...props}) => (
    <RepositoryCard key={"featureList" + id} id={id} {...props} />
  ));

  return (
    <ListWrapper>
      <Typography variant="h4" style={{textTransform: "capitalize", marginBottom: "30px"}}>
        Feature List
      </Typography>
      {featureListState.repositories?.length > 0 ? ui : "The list is empty"}
    </ListWrapper>
  );
});
