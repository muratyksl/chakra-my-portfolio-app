import { Box, Flex, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, IconButton } from '@chakra-ui/react';
import * as React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import { AddIcon } from '@chakra-ui/icons';
type TheSummaryCompProps = {
    tlTotalValue: number;
    usdTotalValue: number;
    increase: number;
    // rawPieChartData?: {
    //     value: number;
    //     currency: string;
    // };
};

export const TheSummaryComp = ({ tlTotalValue, usdTotalValue, increase }: TheSummaryCompProps): JSX.Element => {
    return (
        <Box borderWidth="2px" borderRadius="lg" m="3" p="3">
            <Flex align="center" justify="space-evenly">
                <Box fontSize="sm">
                    <PieChart
                        data={[
                            { title: 'USD', value: 10, color: '#85BB65' },
                            { title: 'TL', value: 15, color: '#40e0d0' },
                        ]}
                        label={({ dataEntry }) => dataEntry.title}
                    />
                </Box>
                <Box>
                    <Flex direction="column">
                        <Stat mb="3">
                            <StatLabel>Dollar Value</StatLabel>
                            <StatNumber>{`$${usdTotalValue}`}</StatNumber>
                            <StatHelpText>
                                <StatArrow type="increase" />
                                {`%${increase}`}
                            </StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel>TL Value</StatLabel>
                            <StatNumber>{`${tlTotalValue}₺`}</StatNumber>
                            <StatHelpText>
                                <StatArrow type="increase" />
                                {`%${increase}`}
                            </StatHelpText>
                        </Stat>
                    </Flex>
                </Box>
                <Box>
                    <IconButton
                        justifySelf="flex-end"
                        colorScheme="blue"
                        aria-label="Search database"
                        icon={<AddIcon />}
                    />
                </Box>
            </Flex>
        </Box>
    );
};
