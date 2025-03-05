import {RepositoryCard} from "@/entities/RepositoryCard";
import {useQuery} from "@tanstack/react-query";
import {getRepositories} from "../api/getRepositories";
import {REPOSITORIES_TAG} from "@/shared/api";
import {useState} from "react";
import {findRepositoriesStore} from "@/features/FindRepositories";
import {Typography} from "@mui/material";
import {ListWrapper} from "@/shared/ui";

export const SearchList = () => {
  const [findRepositoriesState] = useState(() => findRepositoriesStore);
  const {data: repositories} = useQuery({
    queryKey: [REPOSITORIES_TAG],
    queryFn: () => getRepositories(findRepositoriesState.inputValue)
  });

  const ui = repositories?.map(({description, id, ...props}) => (
    <RepositoryCard addFeatureButton key={"searchList" + id} id={id} {...props}></RepositoryCard>
  ));

  return (
    <ListWrapper>
      <Typography variant="h4" style={{textTransform: "capitalize", marginBottom: "30px"}}>
        Repositories List
      </Typography>
      {repositories?.length > 0 ? ui : "There is nothing to show."}
    </ListWrapper>
  );
};
