import {Fragment, useCallback, useState} from "react";
import {observer} from "mobx-react-lite";
import {findRepositoriesStore} from "../model/findRepositoriesStore";
import {TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {CopyButton} from "@/shared/ui";
import {useQueryClient} from "@tanstack/react-query";
import {REPOSITORIES_TAG} from "@/shared/api";
import {featureListStore} from "@/entities/RepositoryCard";
import debounce from "lodash.debounce";
import CloseIcon from "@mui/icons-material/Close";
import {Button} from "@mui/base";

export const FindRepositories = observer(() => {
  const queryClient = useQueryClient();
  const [featureListState] = useState(() => featureListStore);
  const [findRepositoriesState] = useState(() => findRepositoriesStore);

  const debouncedMutation = useCallback(
    debounce(() => {
      queryClient.invalidateQueries({queryKey: [REPOSITORIES_TAG]});
    }, 300),
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    findRepositoriesState.setInputValue(event.target.value);
    debouncedMutation();
  };

  const handleClick = () => {
    findRepositoriesState.setInputValue("");
    featureListState.removeFeatures();
    queryClient.invalidateQueries({queryKey: [REPOSITORIES_TAG]});
  };

  return (
    <Fragment>
      <TextField
        value={findRepositoriesState.inputValue}
        onChange={handleChange}
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <Button style={{visibility: findRepositoriesState.inputValue.length > 0 ? "visible" : "hidden"}} onClick={handleClick}>
              <CloseIcon fontSize="small" />
            </Button>
          )
        }}
      />
      <CopyButton textToCopy={findRepositoriesState.inputValue} />
    </Fragment>
  );
});
