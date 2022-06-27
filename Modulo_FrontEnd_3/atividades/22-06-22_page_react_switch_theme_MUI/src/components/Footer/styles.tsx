import { ListItem, styled } from '@mui/material';

type liProps={
  isDot?: boolean
  minWidth?: string
}

const configDot = (isDot?: boolean): Object | undefined => isDot && ({
  position: 'relative',
  top: '-4px',
  width: '1px',

  '@media(max-width: 600px)': {
    display: 'none',
  },

});

export const StyledLi = styled(ListItem)(({ isDot, minWidth }: liProps) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  minWidth: minWidth || 'auto',

  '@media (max-width: 600px)': {
    flexWrap: 'wrap',
    marginRight: '0',
    fontSize: '.8rem',
    width: '50%',
  },
  ...configDot(isDot),

}));
