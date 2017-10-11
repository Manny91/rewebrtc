
import React, { Component } from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import DashboardComponent from './components/dashboard-component';
import HomeComponent from './components/home-component';
import ConsultantComponent from './components/consultant-component';

export const HomeStack = StackNavigator({
    Home: { screen: HomeComponent },
    Dashboard: { screen: DashboardComponent },
    Consultants: {screen: ConsultantComponent}
},{ headerMode: 'none' });
