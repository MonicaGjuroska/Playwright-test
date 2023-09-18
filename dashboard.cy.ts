/// <reference types = "cypress"/>
import DashboardPageMetods from '../../pageObjects/dashboard/dashboard.methods';
import DashboardPageConstants from '../../pageObjects/dashboard/dashboard.constants';
import { title } from '../../constants/constants'
const dashboard = new DashboardPageMetods();

describe('Dashboard page Menu and Header tests', () => {
  beforeEach(function () {
      cy.filllocalstorage();
      dashboard.visit();
  });

  it('Validate Page Title, logo and header are present', function () {
    dashboard.verifyPageTitle(title);
    dashboard.verifyLogoVisible();
    dashboard.verifyButtonMenuVisible();
    // dashboard.verifySearchFieldVisible();
    // dashboard.verifySearchPlaceholderVisible();
    dashboard.verifyButtonSignOutVisible();
  })

  it('Validate Side Bar Menu have menu options with correct values by default', function () {
    dashboard.verifyManuNameContainsText(DashboardPageConstants.DASHBOARD, DashboardPageConstants.DashboardMenuConstants.dashboard);
    dashboard.verifyManuNameContainsText(DashboardPageConstants.EMPLOYEES, DashboardPageConstants.DashboardMenuConstants.employees);
    dashboard.verifyMenuNotExist(DashboardPageConstants.EMPLOYEES_LIST);
    dashboard.verifyMenuNotExist(DashboardPageConstants.MY_PROFILE);
    dashboard.verifyManuNameContainsText(DashboardPageConstants.PROJECTS, DashboardPageConstants.DashboardMenuConstants.project);
    dashboard.verifyMenuNotExist(DashboardPageConstants.PROJECTS_LIST);
    dashboard.verifyMenuNotExist(DashboardPageConstants.MONTHLY_REPORT);
    //dashboard.verifyManuNameContainsText(DashboardPageConstants.BENEFITS, DashboardPageConstants.DashboardMenuConstants.benefits);
    dashboard.verifyManuNameContainsText(DashboardPageConstants.SECURITY, DashboardPageConstants.DashboardMenuConstants.security);
    dashboard.verifyMenuNotExist(DashboardPageConstants.EMPLOYEE_PERMISSIONS);
    dashboard.verifyMenuNotExist(DashboardPageConstants.ROLE_PERMISSIONS);
    dashboard.verifyManuNameContainsText(DashboardPageConstants.CONFIGURATION, DashboardPageConstants.DashboardMenuConstants.configuration);
    dashboard.verifyMenuNotExist(DashboardPageConstants.MONTH_CONFIGURATOR);
  })
  it('Validate Side Bar Menu expand correct values for Employees on arrow click', function () {
    dashboard.verifyManuNameContainsText(DashboardPageConstants.EMPLOYEES, DashboardPageConstants.DashboardMenuConstants.employees);
    dashboard.expandColapseMenu(DashboardPageConstants.EMPLOYEES);
    dashboard.verifyManuNameContainsText(DashboardPageConstants.EMPLOYEES_LIST, DashboardPageConstants.DashboardMenuConstants.employeesList);
    dashboard.verifyManuNameContainsText(DashboardPageConstants.MY_PROFILE, DashboardPageConstants.DashboardMenuConstants.myProfile);
    dashboard.expandColapseMenu(DashboardPageConstants.EMPLOYEES);
    dashboard.verifyMenuNotExist(DashboardPageConstants.EMPLOYEES_LIST);
    dashboard.verifyMenuNotExist(DashboardPageConstants.MY_PROFILE);
    dashboard.verifyManuNameContainsText(DashboardPageConstants.EMPLOYEES, DashboardPageConstants.DashboardMenuConstants.employees);
  })
  it('Validate Side Bar Menu expand/colapse correct values for Employees on click', function () {
    dashboard.clickMenu(DashboardPageConstants.EMPLOYEES);
    dashboard.verifyManuNameContainsText(DashboardPageConstants.EMPLOYEES_LIST, DashboardPageConstants.DashboardMenuConstants.employeesList);
    dashboard.verifyManuNameContainsText(DashboardPageConstants.MY_PROFILE, DashboardPageConstants.DashboardMenuConstants.myProfile);
    dashboard.clickMenu(DashboardPageConstants.EMPLOYEES);
    dashboard.verifyMenuNotExist(DashboardPageConstants.EMPLOYEES_LIST);
    dashboard.verifyMenuNotExist(DashboardPageConstants.MY_PROFILE);
    dashboard.verifyManuNameContainsText(DashboardPageConstants.EMPLOYEES, DashboardPageConstants.DashboardMenuConstants.employees);
  })
  it('Validate Side Bar Menu expand/colapse correct values for Projects on click', function () {
    dashboard.clickMenu(DashboardPageConstants.PROJECTS);
    dashboard.verifyManuNameContainsText(DashboardPageConstants.PROJECTS_LIST, DashboardPageConstants.DashboardMenuConstants.projectsList);
    dashboard.verifyManuNameContainsText(DashboardPageConstants.MONTHLY_REPORT, DashboardPageConstants.DashboardMenuConstants.monthlyReport);
    dashboard.clickMenu(DashboardPageConstants.PROJECTS);
    dashboard.verifyMenuNotExist(DashboardPageConstants.PROJECTS_LIST);
    dashboard.verifyMenuNotExist(DashboardPageConstants.MONTHLY_REPORT);
    dashboard.verifyManuNameContainsText(DashboardPageConstants.PROJECTS, DashboardPageConstants.DashboardMenuConstants.project);
  })
  it('Validate Side Bar Menu expand correct values for Projects on arrow click', function () {
    dashboard.verifyManuNameContainsText(DashboardPageConstants.PROJECTS, DashboardPageConstants.DashboardMenuConstants.project);
    dashboard.expandColapseMenu(DashboardPageConstants.PROJECTS);
    dashboard.verifyManuNameContainsText(DashboardPageConstants.PROJECTS_LIST, DashboardPageConstants.DashboardMenuConstants.projectsList);
    dashboard.verifyManuNameContainsText(DashboardPageConstants.MONTHLY_REPORT, DashboardPageConstants.DashboardMenuConstants.monthlyReport);
    dashboard.expandColapseMenu(DashboardPageConstants.PROJECTS);
    dashboard.verifyMenuNotExist(DashboardPageConstants.PROJECTS_LIST);
    dashboard.verifyMenuNotExist(DashboardPageConstants.MONTHLY_REPORT);
    dashboard.verifyManuNameContainsText(DashboardPageConstants.PROJECTS, DashboardPageConstants.DashboardMenuConstants.project);
  })
});
