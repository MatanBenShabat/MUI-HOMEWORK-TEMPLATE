import styled from "@emotion/styled";
import { FormControl, InputLabel, OutlinedInput, Select, useTheme } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface CustomSelectProps {
  title: string
}


const CustomSelect: React.FC<CustomSelectProps> = ({ title }) => {

  const theme = useTheme()

  const StyledSelect = styled(Select)({
    "& .MuiSelect-icon": {
      color: theme.palette.info.main,
    },
  });

  return (
    <FormControl
      sx={{
        width: "15%",
      }}
    >
      <InputLabel
        sx={{ color: theme.palette.primary.main, fontWeight: 700, letterSpacing: -0.5 }}
      >
        {title}
      </InputLabel>
      <StyledSelect
        IconComponent={KeyboardArrowDownIcon}
        sx={{ borderRadius: 3, color: "primary.main"}}
        multiple
        input={<OutlinedInput label={title} />}
      ></StyledSelect>
    </FormControl>
  );
}

export default CustomSelect;
