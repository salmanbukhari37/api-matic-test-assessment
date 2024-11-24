import React from "react";
import Button from "@mui/material/Button";

interface ExportButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const ExportButton: React.FC<ExportButtonProps> = ({
  onClick,
  disabled = false,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      sx={{
        borderRadius: "15px",
        fontWeight: "bold",
        backgroundColor: "#007bff",
        "&:hover": {
          backgroundColor: "#0056b3",
        },
      }}
      onClick={onClick}
      disabled={disabled}
    >
      Export
    </Button>
  );
};

export default ExportButton;
