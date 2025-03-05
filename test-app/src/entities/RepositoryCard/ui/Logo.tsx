import styled from "styled-components";
import {LogoProps} from "./types";

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 20px auto;
`;

const Image = styled.img`
  object-fit: cover;
`;

export const Logo = ({src}: LogoProps) => (
  <Wrapper>
    <Image src={src} />
  </Wrapper>
);
