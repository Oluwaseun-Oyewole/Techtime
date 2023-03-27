import { useRef, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import VanillaTilt from "vanilla-tilt";

export const Container = styled.div`
  width: 100%;
  z-index: 1;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;

  padding-right: 50px;
  padding-left: 50px;
  position: relative;

  @media screen and (max-width: 991px) {
    padding-right: 25px;
    padding-left: 25px;
  }
`;

export const CustomButton = styled.button`
  ${tw`text-sm`}
  ${({ icons }) => (icons ? tw`flex items-center justify-center text-sm` : "")};
  border-radius: ${({ border }) => (border ? `${border}px` : "10px")};
  background: ${({ primary }) => (primary ? primary : "#000")};
  white-space: nowrap;
  color: ${({ color }) => (color ? color : "#fff")};
  padding: ${({ paddingX, paddingY }) =>
    paddingY || paddingX ? `${paddingX}px ${paddingY}px` : "10px 12.5px "};
  font-weight: ${({ weight }) => (weight ? 500 : 700)};
  border: ${({ white }) => (white ? "none" : "1px solid #b8d7c7")};
  outline: none;
  cursor: pointer;
  border: ${({ isBorder }) => (isBorder ? "1.5px #fff solid" : "none")};
  margin-left: ${({ ml }) => (ml ? ml : "")};

  &:hover {
    transition: all 0.3s ease-out;
    background: #ffff;
    background: ${({ primary }) => (primary ? primary : "#DCEBE3")};
    opacity: ${({ primary }) => (primary ? 0.7 : 1)};
  }
  width: ${({ width }) => width && `100%`};

  @media screen and (max-width: 960px) {
    width: ${({ width }) => width && "100%"};
    background: ${({ mediaQuery, primary }) => (mediaQuery ? primary : "#000")};
    color: ${({ mediaQuery, color }) => (mediaQuery ? color : "#fff")};
    font-size: 10px;

    &:hover {
      transition: all 0.3s ease-out;
      background: #004db3;
      color: #fff;
      opacity: 0.8;
    }
  }
`;

export const Button = ({
  icons,
  border,
  primary,
  color,
  weight,
  width,
  paddingY,
  paddingX,
  children,
  isBorder,
  imgSrc,
  mediaQuery,
  ml,

  ...props
}) => {
  return (
    <CustomButton
      icons={icons}
      border={border}
      primary={primary}
      color={color}
      weight={weight}
      width={width}
      paddingY={paddingY}
      paddingX={paddingX}
      isBorder={isBorder}
      imgSrc={imgSrc}
      mediaQuery={mediaQuery}
      ml={ml}
    >
      <span className="flex items-center justify-between gap-2">
        {children} <img src={imgSrc} alt="" />
      </span>
    </CustomButton>
  );
};

export const AbsoluteImages = ({ src, className, isMobile }) => {
  return (
    <div>
      <img src={src} alt="" className={className} width={120} />
    </div>
  );
};

export const Content = ({
  title,
  description,
  color,
  width,
  capitalize,
  font,
}) => {
  return (
    <div className="text-center clash-display flex flex-col items-center justify-center">
      <h1
        className={`text-[25px] ${
          width && "md:w-[80%]"
        } text-3xl md:text-4xl lg:text-5xl ${
          font && "font-bold md:font-bold"
        } font-bold ${!capitalize ? "" : "capitalize"} ${
          color ? `text-${color}` : ""
        }`}
      >
        {title}
      </h1>
      <p
        className={`md:w-[90%] lg:w-[55%] text-sm md:text-base leading-6 text-body pt-5 pb-5 capitalize satoshi ${
          color ? `text-${color}` : ""
        }`}
      >
        {description}
      </p>
    </div>
  );
};

const ParentContainer = styled.div`
  ${tw`bg-white mb-5 md:mb-0 md:m-3 p-3 shadow-lg rounded-lg`}
`;
export const PopularCardContainer = ({ data }) => {
  const tilt = useRef([]);

  useEffect(() => {
    return VanillaTilt.init(tilt.current, {
      reverse: true,
    });
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {data?.map((item, index) => {
        return (
          <ParentContainer key={index} ref={tilt}>
            <img src={item.imgUrl} alt="popular" className="" />

            <div className="flex items-center justify-between pt-3 pb-3 text-body font-bold">
              <img src={item.subImgUrl} alt="popular" className="" />
              <>
                {item.cat?.map((i, index) => (
                  <div className="flex gap-3" key={index}>
                    <div className="flex items-center">
                      {i.text1}K <img src="/assets/img/grade.png" alt="" />
                    </div>
                    ({i.text2}K+)
                  </div>
                ))}
              </>
            </div>

            <h2 className="clash-display text-base md:text-[24px] capitalize font-bold pt-5 pb-3 ">
              {item.title}
            </h2>

            <div>
              {item.time?.map((i, index) => (
                <div
                  className="flex items-center justify-between pt-0 pb-5 text-body font-medium"
                  key={index}
                >
                  <div className="flex items-center justify-center gap-2">
                    <img
                      src="/assets/img/schedule.png"
                      alt=""
                      className="w-5"
                    />
                    <p className="text-sm"> {i.time}</p>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <img
                      src="/assets/img/menu_book.png"
                      alt=""
                      className="w-5"
                    />
                    <p className="text-sm"> {i.lesson}</p>
                  </div>
                </div>
              ))}

              <div className="py-2">
                {item.profile?.map((profile, index) => {
                  return (
                    <div
                      className="flex items-center justify-between"
                      key={index}
                    >
                      <div className="flex items-center gap-2">
                        <img src={profile.imgSrc} alt="" />
                        <p className="font-black">{profile.name}</p>
                      </div>

                      <p className="font-semibold text-bgColor ">
                        ${profile.price}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </ParentContainer>
        );
      })}
    </div>
  );
};
