import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { useState } from 'react';

import TheSummaryComp from './components/TheSummaryComp';
export const App = () => {
    const [tlTotalValue] = useState(150);
    const [usdTotalValue] = useState(1105);
    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <TheSummaryComp tlTotalValue={tlTotalValue} usdTotalValue={usdTotalValue} increase={25} />
            </Box>
        </ChakraProvider>
    );
};
