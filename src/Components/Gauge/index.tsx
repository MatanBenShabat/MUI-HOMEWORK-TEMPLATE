import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import {Box} from "@mui/material"
interface GaugeProps {
  className?: string;
  color?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'success'
    | 'info'
    | 'white'
    | 'trueWhite';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  circleRatio?: number;
  styles?: any;
  value?: number;
  text: any;
  strokeWidth?: number;
  children?: ReactNode;
}

const GaugeWrapper = styled(CircularProgressbarWithChildren)(
  ({ theme }) => `
  
  &.CircularProgressbar {
    vertical-align: middle;
    width: 80%;
    margin: 0 auto;
    display: flex;
    
    & + [data-test-id="CircularProgressbarWithChildren__children"] {
      margin-top: 0 !important;
      top: 0;
    }

    .CircularProgressbar-path {
      stroke-linecap: round;
      transition: stroke-dashoffset 0.5s ease 0s;

    }
  
    .CircularProgressbar-trail {
      stroke-linecap: round;
      
    }
    
    .CircularProgressbar-text {
      font-size: 0.6rem;
      dominant-baseline: middle;
      text-anchor: middle;
      font-weight: bold;
      background: blue;
    }
  
    &.MuiGauge {
      &-xsmall {
        max-width: 48px;
      }
      &-small {
        max-width: 62px;
        .CircularProgressbar-text {
          font-weight: bold;
          font-size: 24px;
        }
      }
      &-medium {
        max-width: 120px;
      }
      &-large {
        max-width: 140px;
      }
      &-xlarge {
        max-width: 180px;
      }
      &-xxlarge {
        max-width: 350px;

      }
      
      &-primary {

        .CircularProgressbar-path {
          stroke: ${theme.palette.success.main};
        }
    
        .CircularProgressbar-trail {
          stroke: #e9ecef;
        }
    
        .CircularProgressbar-text {
          fill: ${theme.palette.success.main};
        }
    
        .CircularProgressbar-background {
          fill: yellow;
        }
      }
    }
  }
`
);

const Gauge: FC<GaugeProps> = ({
  className,
  color = 'primary',
  size = 'medium',
  circleRatio,
  value,
  styles,
  text,
  strokeWidth,
  children,
  ...rest
}) => {
  return (
    <GaugeWrapper
      circleRatio={circleRatio}
      value={value!}
      text={text}
      strokeWidth={strokeWidth}
      styles={styles}
      className={`MuiGauge-${color} MuiGauge-${size}`}
      {...rest}
    >
    <Box sx={{backgroundColor: "yellow", width:"200px"}}>
      {children}
    </Box>
    </GaugeWrapper>
  );
};

Gauge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.any,
  value: PropTypes.number,
  text: PropTypes.any,
  strokeWidth: PropTypes.number,
  circleRatio: PropTypes.number,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'error',
    'warning',
    'success',
    'info',
    'white',
    'trueWhite'
  ]),
  size: PropTypes.oneOf([
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge'
  ])
};

export default Gauge;
