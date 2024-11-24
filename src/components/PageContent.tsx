import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import rehypeRaw from "rehype-raw";
import { Box, Divider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setEditing, updatePageContent } from "../redux/slices/pagesSlice";
import { marked } from "marked";
import SuccessSnackbar from "./SuccessSnackbar";
import EditButtonGroup from "./EditButtonGroup";
import TitleEditor from "./TitleEditor";
import { Messages } from "dto/enum/PageContent.enum";
import { PageContentProps } from "dto/interfaces/IPageContent.interface";

const PageContent: React.FC<PageContentProps> = ({
  pageIndex,
  isSmallScreen,
}) => {
  const dispatch = useDispatch();
  const page = useSelector(
    (state: RootState) => state.pagesSlice.pages[pageIndex]
  );
  const isEditing = useSelector(
    (state: RootState) => state.pagesSlice.isEditing
  );

  const [showSnackbar, setShowSnackbar] = useState(false);

  const [htmlContent, setHtmlContent]: any = useState(() =>
    marked(page.bodyText)
  );
  const [editedTitle, setEditedTitle] = useState(page.title);

  const handleSave = async () => {
    const html = await marked(htmlContent);
    const sanitizedHtmlContent = html.replace(/<br>/g, "");
    dispatch(
      updatePageContent({
        index: pageIndex,
        title: editedTitle,
        bodyText: sanitizedHtmlContent,
      })
    );
    dispatch(setEditing(false));
    setShowSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  const handleCancel = async () => {
    const html = await marked(htmlContent);
    const sanitizedHtmlContent = html.replace(/<br>/g, "");
    setHtmlContent(sanitizedHtmlContent);
    setEditedTitle(page.title);
    dispatch(setEditing(false));
  };

  const editTitleHandler = (value: string) => {
    setEditedTitle(value);
    dispatch(
      updatePageContent({
        index: pageIndex,
        title: value,
      })
    );
  };

  const editHandler = () => {
    dispatch(setEditing(true));
    setEditedTitle(page.title);
    setHtmlContent(marked(page.bodyText));
  };

  return (
    <Box
      flex="1"
      p={isSmallScreen ? 2 : 5}
      bgcolor="white"
      position="relative"
      sx={{
        padding: isSmallScreen ? 2 : 4,
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <EditButtonGroup
        isEditing={isEditing}
        onSave={handleSave}
        onEdit={editHandler}
        onCancel={handleCancel}
      />

      <TitleEditor
        isEditing={isEditing}
        title={page.title}
        onChange={editTitleHandler}
      />

      <Divider sx={{ mb: 3 }} />

      <Box sx={{ textAlign: "justify", lineHeight: "1.8" }}>
        {isEditing ? (
          <ReactQuill
            value={htmlContent}
            onChange={setHtmlContent}
            style={{ minHeight: "300px" }}
          />
        ) : (
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {page.bodyText}
          </ReactMarkdown>
        )}
      </Box>

      <SuccessSnackbar
        open={showSnackbar}
        message={Messages.SUCCESS}
        onClose={handleSnackbarClose}
      />
    </Box>
  );
};

export default PageContent;
