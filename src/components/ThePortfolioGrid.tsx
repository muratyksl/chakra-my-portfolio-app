import { Box, SimpleGrid } from '@chakra-ui/react';
import * as React from 'react';

import { Currencies } from './Currencies';
import { IPorfolioObject } from '../App';
type IThePortfolioGridProps = {
    portfolioArray: IPorfolioObject[];
};

export const ThePortfolioGrid = ({ portfolioArray }: IThePortfolioGridProps): JSX.Element => {
    const portfolioList = portfolioArray.map((x) => {
        return <Currencies key={x.currency} value={x.value} currency={x.currency} usdValue={x.usdValue} />;
    });

    return (
        <SimpleGrid columns={[2, 3, 4]} spacing="40px" borderWidth="2px" borderRadius="lg" m="3" p="3">
            {portfolioList}
        </SimpleGrid>
    );
};
