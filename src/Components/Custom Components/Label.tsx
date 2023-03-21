import { FC } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { LabelProps } from '../../types';

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
          background-color: ${theme.colors.lightGreen};
          color:  ${theme.colors.green};
          font-weight: 600;
          font-size: 1.2rem;
          padding: 6px 14px;
        }
      }
`
);

const Label: FC<LabelProps> = ({
  className,
  color = '',
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
