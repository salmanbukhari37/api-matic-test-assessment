import React from "react";
import { TextField, Typography } from "@mui/material";

interface TitleEditorProps {
  isEditing: boolean;
  title: string;
  onChange: (newTitle: string) => void;
}

const TitleEditor: React.FC<TitleEditorProps> = ({
  isEditing,
  title,
  onChange,
}) => {
  return isEditing ? (
    <TextField
      fullWidth
      value={title}
      onChange={(e) => onChange(e.target.value)}
      variant="outlined"
      sx={{
        marginTop: 5,
        marginBottom: 3,
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    />
  ) : (
    <Typography
      variant="h4"
      fontWeight="bold"
      gutterBottom
      sx={{ textAlign: "left" }}
    >
      {title}
    </Typography>
  );
};

export default TitleEditor;
