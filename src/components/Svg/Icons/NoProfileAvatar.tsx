import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clip-path="url(#clip0)">
      <path d="M19.9297 2C10.029 2 1.99374 10.064 1.99374 20C1.99374 29.936 10.029 38 19.9297 38C29.8303 38 37.8656 29.936 37.8656 20C37.8656 10.064 29.8303 2 19.9297 2ZM19.9297 7.4C22.907 7.4 25.3105 9.812 25.3105 12.8C25.3105 15.788 22.907 18.2 19.9297 18.2C16.9523 18.2 14.5489 15.788 14.5489 12.8C14.5489 9.812 16.9523 7.4 19.9297 7.4ZM19.9297 32.96C15.4457 32.96 11.4819 30.656 9.16811 27.164C9.22192 23.582 16.3425 21.62 19.9297 21.62C23.4989 21.62 30.6374 23.582 30.6912 27.164C28.3775 30.656 24.4137 32.96 19.9297 32.96Z" fill="#EBEBEB"/>
      </g>
      <defs>
      <clipPath id="clip0">
      <rect width="40" height="40" fill="white" transform="translate(0.239258)"/>
      </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
