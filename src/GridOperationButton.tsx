import { Grid, Button, styled } from "@mui/material";

interface GridOperationButtonProps {
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string;
}

const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
  backgroundColor: "#8985b8",
  borderColor: props.selected ? "#fff" : "#8985b8",
}));

export const GridOperationButton: React.FC<GridOperationButtonProps> = ({
  operation,
  selectOperation,
  selectedOperation,
}) => {
  return (
    <Grid item>
      <StyledButton
        fullWidth
        variant="outlined"
        onClick={() => selectOperation(operation)}
        selected={selectedOperation === operation}
      >
        {operation}
      </StyledButton>
    </Grid>
  );
};
