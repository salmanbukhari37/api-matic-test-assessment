import React from "react";
import { Box, Button } from "@mui/material";
import { EditButtonGroupProps } from "dto/interfaces/IEditButtonGroup.interface";

const EditButtonGroup: React.FC<EditButtonGroupProps> = ({
  isEditing,
  onSave,
  onEdit,
  onCancel,
}) => {
  return (
    <Box position="absolute" top="16px" right="16px" display="flex" gap={1}>
      {isEditing ? (
        <>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#28a745",
              color: "#fff",
              textTransform: "capitalize",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#218838",
              },
            }}
            onClick={onSave}
          >
            Complete Edit
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#dc3545",
              color: "#fff",
              textTransform: "capitalize",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#c82333",
              },
            }}
            onClick={onCancel}
          >
            Cancel
          </Button>
        </>
      ) : (
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#007bff",
            color: "#fff",
            textTransform: "capitalize",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#0056b3",
            },
          }}
          onClick={onEdit}
        >
          Edit
        </Button>
      )}
    </Box>
  );
};

export default EditButtonGroup;
