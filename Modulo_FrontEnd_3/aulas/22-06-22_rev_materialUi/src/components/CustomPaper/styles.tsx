import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

type propsPaper = {
  height?: string;
  width?: string;
  img?: string
}

export const PaperStyled = styled(Paper)((props: propsPaper) => ({
  // padding: '30px',
  // marginRight: '10px'
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: props.height || '100%',
  width: props.width || '100%',
  justifyContent: 'center',
  background: `url(${props.img}) no-repeat center`
}));
