import React from 'react';
import { Box } from '@mui/material';
import { ComponentMeta } from '@storybook/react'

import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
  decorators: [
    Story => (
      <Box maxWidth='lg'>
        <Story />
      </Box>
    )
  ]
} as ComponentMeta<typeof Button>

export const Primary = ({label='Button Primary'}: {label: string}) => <Button label={label} />;