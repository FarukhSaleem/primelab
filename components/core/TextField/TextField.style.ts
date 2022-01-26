import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme: any) => ({
  '& .MuiInput-formControl': {
    height: '100%',
    alignItems: 'center',
  },
  textField: {
    marginTop: 13,
    marginBottom: 20, 
  },
}))
export default useStyles;