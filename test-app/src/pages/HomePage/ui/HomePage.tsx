import {SearchList} from "@/widgets/SearchList";
import {FeatureList} from "@/widgets/FeatureList";
import {Container} from "@/shared/ui";
import {Wrapper} from "./Wrapper";

export const HomePage = () => {
  return (
    <Container>
      <Wrapper>
        <SearchList />
        <FeatureList />
      </Wrapper>
    </Container>
  );
};
