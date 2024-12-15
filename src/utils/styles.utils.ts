import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material/styles';

export const mergeSx = (...styles: Array<SxProps<Theme>>): SxProps<Theme> => {
  return styles.reduce((acc, style) => {
    const resolvedStyle = typeof style === 'function' ? style({} as Theme) : style;
    return { ...acc, ...resolvedStyle };
  }, {} as SxProps<Theme>);
};
