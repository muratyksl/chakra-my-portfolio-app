import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { useState } from 'react';

import { TheSummaryComp } from './components/TheSummaryComp';
import { ThePortfolioGrid } from './components/ThePortfolioGrid';

export type IPorfolioObject = {
    value: number;
    currency: string;
    usdValue: number;
};

export const App = () => {
    const [tlTotalValue] = useState(150);
    const [usdTotalValue] = useState(1105);
    const [totalPortfolio, SetTotalPortfolio] = useState<IPorfolioObject[]>([
        { value: 2000, currency: 'TRY', usdValue: 14000 },
        { value: 2000, currency: 'EUR', usdValue: 2243 },
    ]);

    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl" bg="">
                <TheSummaryComp tlTotalValue={tlTotalValue} usdTotalValue={usdTotalValue} increase={25} />
                <ThePortfolioGrid portfolioArray={totalPortfolio} />
            </Box>
        </ChakraProvider>
    );
};
