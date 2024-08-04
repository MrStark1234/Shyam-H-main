// SupportDialog.js
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { MdOutlineEmail } from "react-icons/md";

const SupportDialog = ({ open, handleClose }) => {
  return (
    <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
      <DialogTitle>
        <div className="flex items-center gap-2">
          <MdOutlineEmail className="text-primary" size={24} />
          <span>Support</span>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="flex flex-col items-center gap-4 text-center">
          <Typography variant="h6" gutterBottom>
            We're here to help!
          </Typography>
          <Typography variant="body1">
            If you have any questions or need assistance, please contact us at:
          </Typography>
          <a
            // href="mailto:portfolio@dexterangels.com"
            className="text-primary font-bold underline"
          >
            +91 9680480916
          </a>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SupportDialog;
