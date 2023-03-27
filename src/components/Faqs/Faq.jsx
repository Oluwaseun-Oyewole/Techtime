import styled from "styled-components";
import tw from "twin.macro";
import { Accordion } from "./Accordion";
import { faqs } from "../../utils/data";

const FaqBody = styled.section`
  ${tw`w-full lg:w-4/5 mx-auto mt-2 lg:mt-5`}
`;

export const Faq = () => {
  return (
    <>
      <FaqBody>
        <Accordion data={faqs} />
      </FaqBody>
    </>
  );
};
