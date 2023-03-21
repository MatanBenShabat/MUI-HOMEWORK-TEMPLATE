import styled from "@emotion/styled";
import { FormControl, InputLabel, OutlinedInput, Select, useTheme } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CustomSelectProps } from "../../types";

const CustomSelect: React.FC<CustomSelectProps> = ({ title }) => {

  const theme = useTheme()
  

  const StyledSelect = styled(Select)({
    "& .MuiSelect-icon": {
      color: theme.colors.blue,
    },
  });

  return (
    <FormControl
      sx={{
        width: "15%",
      }}
    >
      <InputLabel
        sx={{ color: theme.colors.darkBlue, fontWeight: 700, letterSpacing: -0.5 }}
      >
        {title}
      </InputLabel>
      <StyledSelect
        IconComponent={KeyboardArrowDownIcon}
        sx={{ borderRadius: 3}}
        multiple
        input={<OutlinedInput label={title} />}
      ></StyledSelect>
    </FormControl>
  );
}

export default CustomSelect;
