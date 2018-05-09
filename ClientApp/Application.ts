import ApplicationInterface from './interfaces/ApplicationInterface';
import { format } from 'date-fns';
import HighSchoolInterface from './interfaces/HighSchoolInterface';

class Application implements ApplicationInterface {
  id  =  null;
  academicYearStart =  null;
  academicYearEnd =  null;
  isSummerApplication =  false;
  applicationStatus =  null;
  lastName =  null;
  firstName =  null;
  nickName =  null
  ssn =  null;
  currentContact = null;
  permanentContact = null;
  gender =  null;
  dob =  format(new Date(), 'YYYY-MM-DD');
  placeOfBirth =  null;
  age =  null;
  homeAtoll =  null;
  ebeyeKwajResOrLandOwner =  false;
  martialStatus =  null;
  spouseName = null;
  hasChildren = false;
  children =  null;
  emergencyContact = null;
  parentMartialStatus =  null;
  father = null;
  mother = null;
  guardian = null;
  currentCollege = null;
  degreeSought =  null;
  collegeStanding =  null;
  hasPriorCollege = false;
  priorCollege = null;
  fieldOfStudy =  null;
  dateOfGraduation =  format(new Date(), 'YYYY-MM-DD');
  dateFinAidNeeded =  format(new Date(), 'YYYY-MM-DD');
  highSchool = new HighSchool();
  savingsDividendsInterests =  0;
  employmentIncome =  0;
  spouseIncome =  0;
  governmentSalary =  0;
  compensation =  0;
  othersResources =  0;
  receivedFinAidBefore =  false;
  receivedFinAidBeforeDate =  format(new Date(), 'YYYY-MM-DD');
  educationExpenseTermType =  null;
  expenseTermSemesterSpecific =  null;
  tuitionType =  null;
  tuiton =  0;
  supplies =  0;
  roomAndBoardMonths =  0;
  roomAndBoard =  0;
  healthInsurance =  0;
  miscellaneous =  0;
  transportation =  0;
  airfare =  0;
  totalExpenses =  0;
  financialExpenseTermType =  null;
  financialExpenseSemesterSpecific =  null;
  pellGrant =  0;
  collegeScholarship =  0;
  otherScholarship =  0;
  parentalSupport =  0;
  personalAssets =  0;
  othersFinancial =  0;
  totalFinancial =  0;
  totalFinAssistanceNeeded =  0;
  hasFather =  false;
  hasMother =  false;
  hasGuardian = false;
}

class HighSchool implements HighSchoolInterface {
  name = null;
  country = null;
  stateAtoll = null;
  address = null;
  zip = null;
  highSchoolStartDate = format(new Date(), 'YYYY-MM-DD');
  highSchoolEndDate = format(new Date(), 'YYYY-MM-DD');
  highSchoolGradDate = format(new Date(), 'YYYY-MM-DD');
}

export default Application;