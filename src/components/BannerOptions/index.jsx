import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "..";

const Banner = styled.div`
  ${tw`bg-white py-6 lg:py-6 bg-banner`}
`;

export const BannerSection = ({ imgUrl, classname }) => {
  return (
    <Banner>
      <Container>
        <div className="md:pt-3 md:pb-3 flex items-center justify-center gap-5 md:gap-10 lg:gap-14">
          {imgUrl?.map((el, i) => (
            <div key={i}>
              <img src={el} className={classname} alt="banner" />
            </div>
          ))}
        </div>
      </Container>
    </Banner>
  );
};
