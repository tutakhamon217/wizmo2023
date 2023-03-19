import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-microsoft',
  templateUrl: './microsoft.component.html',
  styleUrls: ['./microsoft.component.scss'],
})
export class MicrosoftComponent {
  profitability = [
    {
      financeName: 'Net Income',
      netIncome: '$72,738',
      netIncomePercentage: 'NA',
    },
    {
      financeName: 'Net Income Growth',
      netIncome: '19%',
      netIncomePercentage: '-12%',
    },
    { financeName: 'Net Margin', netIncome: '37%', netIncomePercentage: '15%' },
    {
      financeName: 'Return on Equity',
      netIncome: '44%',
      netIncomePercentage: '27%',
    },
  ];

  assetUtilization = [
    { assetName: 'Revenue', asset: '$198,270', assetPercentage: 'NA' },
    { assetName: 'Revenue Growth', asset: '18%', assetPercentage: '10%' },
    { assetName: 'Total Assets', asset: '$364,840', assetPercentage: 'NA' },
    { assetName: 'Total Assets Growth', asset: '9%', assetPercentage: 'NA' },
    { assetName: 'Asset Turnover', asset: '54%', assetPercentage: '64%' },
  ];

  capitalStructure = [
    {
      capitalName: 'Total Equity',
      capital: '$166,542',
      capitalPercentage: 'NA',
    },
    {
      capitalName: 'Total Equity Growth',
      capital: '17%',
      capitalPercentage: 'NA',
    },
    {
      capitalName: 'Debt-to-Equity Ratio',
      capital: '1.19',
      capitalPercentage: '0.04',
    },
  ];

  valuations = [
    {
      valuationName: 'Market Capitalization ',
      valuation: '$1,830,000',
      valuationPercentage: 'NA',
    },
    {
      valuationName: 'Price-to-Earnings Ratio',
      valuation: '25.8',
      valuationPercentage: '28.78',
    },
    {
      valuationName: 'Market-to-Book Ratio',
      valuation: '11.3',
      valuationPercentage: '7.93',
    },
  ];

  esgSummary = [
    {
      esgName: 'Providers',
      esg: 'Sustainalytics',
      esgRefinitiv: 'Refinitiv',
      esgMSCI: 'MSCI',
    },
    {
      esgName: 'Overall Score',
      esg: '15.4',
      esgRefinitiv: '92/100',
      esgMSCI: 'AAA',
    },
    {
      esgName: 'Industry Ranking',
      esg: '64/1056',
      esgRefinitiv: '2/882',
      esgMSCI: 'Leader',
    },
    {
      esgName: 'Environment',
      esg: '1.5',
      esgRefinitiv: '78',
      esgMSCI: '1.3°C',
    },
    { esgName: 'Social', esg: '8.4', esgRefinitiv: '97', esgMSCI: '' },
    { esgName: 'Governance', esg: '5.3', esgRefinitiv: '93', esgMSCI: '' },
  ];

  profileInfo = [
    { name: 'Founded Year', information: 'April 4, 1975' },
    { name: 'Headquarters', information: 'Redmond, WA, USA' },
    { name: 'IPO Date', information: 'March 13, 1986' },
    { name: 'Contact', information: '+1 (425) 882 8080' },
    { name: 'Website', information: 'microsoft.com' },
    { name: 'Industry', information: ' Tech & Com' },
    { name: 'Sector', information: 'Software - Infrastructure' },
    { name: 'Employees', information: '221,000 people' },
    { name: 'Key People', information: 'Mr. Satya Nadella (Chairman & CEO)' },
  ];

  esgNews = [
    {
      imgSrc: 'assets/image/ic_heading-image.svg',
      title: 'Title of News/Updates',
      subTitle: 'Summary of News/Updates - Description',
    },
    {
      imgSrc: 'assets/image/ic_heading-image.svg',
      title: 'Title of News/Updates',
      subTitle: 'Summary of News/Updates - Description',
    },
    {
      imgSrc: 'assets/image/ic_heading-image.svg',
      title: 'Title of News/Updates',
      subTitle: 'Summary of News/Updates - Description',
    },
  ];

  constructor(private router: Router) {}

  redirectToFinanceLearning() {
    this.router.navigateByUrl('/finance');
  }

  redirectToESGLearning() {
    this.router.navigateByUrl('/esg-learning');
  }
}
