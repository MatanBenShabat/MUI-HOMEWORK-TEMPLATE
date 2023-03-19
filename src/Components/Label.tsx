import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

interface LabelProps {
  className?: string;
  color?:
    | 'primary'
    | 'black'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'success'
    | 'info';
  children?: ReactNode;
}

const LabelWrapper = styled('span')(
  ({ theme }) => `
      background-color: black;
      padding: 5px;
      font-size: 15px;
      border-radius: 5px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      max-height: 20px;
      
      &.MuiLabel {
        &-primary {
          background-color: green;
          color: greenyellow
        }
        &-success {
          background-color: rgba(137, 252, 0, 0.3);
          color:  #29bf12;
          font-weight: 600;
          font-size: 1.2rem;
          padding: 6px 14px;
        }
      }
`
);

const Label: FC<LabelProps> = ({
  className,
  color = 'red',
  children,
  ...rest
}) => {
  return (
    <LabelWrapper className={'MuiLabel-' + color} {...rest}>
      {children}
    </LabelWrapper>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'black',
    'secondary',
    'error',
    'warning',
    'success',
    'info'
  ])
};

export default Label;
