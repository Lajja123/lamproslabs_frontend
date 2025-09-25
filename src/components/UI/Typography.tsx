import React, { JSX } from "react";

type VariantType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "text"
  | "number"
  | "content"
  | "title"
  | "smallText"
  | "FooterBig"
  | "MenuText"
  | "Optiontitle"
  | "OptionSubtitle"
  | "HeroTitle"
  | "toolText"
  | "MobileSubTitle"
  | "position";
type ColorVariant =
  | "primary"
  | "white"
  | "black"
  | "secondary"
  | "gray"
  | "cyan"
  | "lightGreen"
  | "grayish";

interface TypographyProps {
  variant?: VariantType;
  color?: ColorVariant;
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
  style?: React.CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "text",
  color = "white",
  children,
  className = "",
  id,
  as,
  style,
}) => {
  const colorStyles = {
    primary: "text-[#E3FDFF]",
    white: "text-white",
    black: "text-black",
    secondary: "text-[#7DDEDA]",
    gray: "text-[#8D8D8D]",
    cyan: "text-[#D0FCFF]",
    lightGreen: "text-[#C1FFDA]",
    grayish: "text-[#B1B1B1]",
  };

  const variantStyles = {
    h1: "text-[36px] xs:text-[48px] bp-sm:text-[56px] md:text-[64px] lg:text-[68px] bp-2xl:text-[80px] font-[200]",
    h2: "text-[28px] bp-sm:text-[36px] lg:text-[40px] 2xl:text-[48px] font-[300]",
    h3: "text-[16px] sm:text-[20px] lg:text-[26px] 2xl:text-[28px] font-[400]",
    h4: "text-[24px] bp-sm:text-[28px] lg:text-[32px] xl:text-[34px] 2xl:text-[36px] font-[400]",
    h5: "text-[14px] bp-sm:text-[16px] lg:text-[20px] xl:text-[22px] font-[500]",
    text: "text-[14px] bp-sm:text-[17px] md:text-[18px] font-[300]",
    number:
      "text-[96px] bp-sm:text-[110px] md:text-[130px] lg:text-[150px] xl:text-[180px] 2xl:text-[200px] font-[500]",
    content:
      "text-[24px] sm:text-[28px] md:text-[32px] xl:text-[36px] 2xl:text-[40px] font-[500]",
    title:
      "text-[60px] sm:text-[70px] md:text-[80px] xl:text-[86px] font-[400]",
    smallText: "text-[18px] font-[200] md:font-[500]",
    FooterBig: "text-[24px] font-[400]",
    MenuText: "text-[20px] font-[400]",
    Optiontitle: "text-[18px] font-[400]",
    OptionSubtitle: "text-[14px] font-[400]",
    position: "text-[16px] font-[400]",
    HeroTitle:
      "text-[40px] xs:text-[45px] bp-sm:text-[50px] sm:text-[60px] md:text-[80px] font-[200] leading-[66px] sm:leading-[72px] md:leading-[90px] bp-lg:leading-[100px]",
    toolText: "text-[8px] xs:text-[10px] font-[500]",
    MobileSubTitle:
      "text-[20px] sm:text-[22px] md:text-[24px] font-[200] md:font-[500]",
  };

  const Component = as || getDefaultComponent(variant);

  return (
    <Component
      key={id}
      className={`${variantStyles[variant]} ${colorStyles[color]} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
};

const getDefaultComponent = (
  variant: VariantType
): keyof JSX.IntrinsicElements => {
  switch (variant) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    default:
      return "p";
  }
};

export default Typography;
