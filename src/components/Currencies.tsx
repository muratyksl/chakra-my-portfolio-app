import { Box, Stat, StatLabel, StatNumber, StatGroup, Flex, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import * as React from 'react';

import { IPorfolioObject } from '../App';

export const Currencies = ({ value, currency, usdValue }: IPorfolioObject): JSX.Element => {
    return (
        <Box bgGradient="linear(to-r, green.200, blue.500)" borderRadius="lg">
            <Flex direction="column" align="center" justify="space-between" height="%90">
                <Flex>
                    <Stat>
                        <StatLabel>Currecy Amount</StatLabel>
                        <StatNumber>{`${value} ${currency}`}</StatNumber>
                    </Stat>
                    <Stat>
                        <StatLabel>Usd Value</StatLabel>
                        <StatNumber>{usdValue}</StatNumber>
                    </Stat>
                </Flex>
                <Flex>
                    <Stat>
                        <StatLabel>Increase In One Week</StatLabel>
                        <StatNumber>%5</StatNumber>
                    </Stat>
                </Flex>
                <IconButton justifySelf="flex-end" colorScheme="blue" aria-label="Search database" icon={<AddIcon />} />
            </Flex>
        </Box>
    );
};
