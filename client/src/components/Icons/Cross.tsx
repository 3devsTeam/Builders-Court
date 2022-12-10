import React, { FC } from "react"

interface Props {
  color: string
}

export const Cross: FC<Props> = ({ color }) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.2132 15.0711C14.8017 15.4826 14.3714 15.6884 13.9225 15.6884C13.4548 15.6697 13.0152 15.4546 12.6036 15.043L8.00184 10.4412L3.48421 14.9588C3.09137 15.3517 2.67983 15.5574 2.24958 15.5761C1.80062 15.5761 1.37972 15.3797 0.986888 14.9869C0.59405 14.5941 0.406985 14.1825 0.425692 13.7523C0.425692 13.3033 0.622111 12.8824 1.01495 12.4896L5.53257 7.97194L1.07107 3.51043C0.659524 3.09889 0.453751 2.66864 0.453751 2.21968C0.453752 1.77073 0.668878 1.33112 1.09913 0.900872C1.51067 0.489329 1.93157 0.29291 2.36182 0.311615C2.81077 0.311616 3.24103 0.517388 3.65257 0.928932L8.11408 5.39044L12.6317 0.872812C13.0432 0.461269 13.4641 0.26485 13.8944 0.283557C14.3246 0.26485 14.7362 0.451915 15.129 0.844752C15.5219 1.23759 15.7183 1.65849 15.7183 2.10744C15.7183 2.51899 15.5125 2.93053 15.101 3.34207L10.5833 7.8597L15.1851 12.4615C15.5967 12.873 15.8118 13.3127 15.8305 13.7803C15.8492 14.2106 15.6435 14.6408 15.2132 15.0711Z'
        fill={color}
      />
    </svg>
  )
}
