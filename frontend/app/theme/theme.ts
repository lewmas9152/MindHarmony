import {Roboto} from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const roboto =({
    weight :[300,400,500,700],
    subsets: ['latin'],
    display: 'swap',
})

export const theme = createTheme({
    palette: {
        mode: 'light',
    }
})