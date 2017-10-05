import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../src/components/Home';
import Transactions from '../src/components/Transactions';
import Budget from '../src/components/Budget';

export const Tabs = TabNavigator({
    Home: {
        screen: Home,
    },
    Transactions: {
        screen: Transactions,
    },
    Budget: {
        screen: Budget,
    },
})
