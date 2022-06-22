import { Typography } from '@mui/material';
import { PaperStyled } from './styles';

type CustomPaperProps = {
    title: string;
};

export function CustomPaper({ title }: CustomPaperProps) {
  return (
    <PaperStyled elevation={2}>
      <Typography variant='body2'>{ title }</Typography>
    </PaperStyled>
  );
}
