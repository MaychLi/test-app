import {Link} from "react-router-dom";
import {FindRepositories} from "@/features/FindRepositories";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Container} from "@/shared/ui";
import {Wrapper} from "./Wrapper";
import {Inner} from "./Inner";

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Inner>
          <Link to="/" className="d-flex gap-10 align-center">
            <GitHubIcon />
            GitHub API Search
          </Link>
          <FindRepositories />
        </Inner>
      </Container>
    </Wrapper>
  );
};
