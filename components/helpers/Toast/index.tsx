import { Alert, Snackbar } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { hiddenToast } from "../../../slices/toast";

const Toast = () => {
  const dispatch = useDispatch()
  const toast = useSelector((state: any) => state.toast);
  
  return (
    <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={toast.isOpen}
        onClose={() => dispatch(hiddenToast())}
        key='signup-top-center'
        autoHideDuration={5000}
      >
        <Alert onClose={() => dispatch(hiddenToast())} severity={toast.type} sx={{ width: '100%' }}>
          { toast?.message || '' }
        </Alert>
    </Snackbar>
  )
}

export default Toast
