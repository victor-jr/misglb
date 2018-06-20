import ApplicationInterface from '../interfaces/ApplicationInterface';
import { format } from 'date-fns';
import ContactInterface from '../interfaces/ContactInterface';
import ParentInterface from '../interfaces/ParentInterface';
import SchoolInterface from '../interfaces/SchoolInterface';
import HighSchoolInterface from '../interfaces/HighSchoolInterface';
import PriorCollegeInterface from '../interfaces/PriorCollegeInterface';

export class Application implements ApplicationInterface {
  id = null;
  userId = null;
  academicYearStart = format(new Date(), 'YYYY-MM-DD');
  academicYearEnd = format(new Date(), 'YYYY-MM-DD');
  academicYear = null;
  isSummerApplication =  false;
  applicationStatus =  null;
  lastName =  null;
  firstName =  null;
  nickName =  null;
  fullName = null;
  ssn =  null;
  currentContact = new CurrentContact();
  permanentContact = new PermanentContact();
  gender = 0;
  dob =  format(new Date(), 'YYYY-MM-DD');
  placeOfBirth =  null;
  age =  null;
  homeAtoll =  null;
  ebeyeKwajResOrLandOwner = false;
  martialStatus = 0;
  spouseName = null;
  hasChildren = false;
  children =  null;
  emergencyContact = new EmergencyContact();
  parentMartialStatus = 0;
  father = new Father();
  mother = new Mother();
  guardian = new Guardian();
  currentCollege = new CurrentCollege();
  degreeSought =  null;
  collegeStanding =  null;
  hasPriorCollege = false;
  priorCollege = new PriorCollege();
  fieldOfStudy =  null;
  dateOfGraduation = format(new Date(), 'YYYY-MM-DD');
  dateFinAidNeeded = format(new Date(), 'YYYY-MM-DD');
  highSchool = new HighSchool();
  savingsDividendsInterests =  0;
  employmentIncome =  0;
  spouseIncome =  0;
  governmentSalary =  0;
  compensation =  0;
  othersResources =  0;
  receivedFinAidBefore =  false;
  receivedFinAidBeforeDate =  format(new Date(), 'YYYY-MM-DD');
  educationExpenseTermType = 0;
  expenseTermSemesterSpecific = 0;
  tuitionType = 0;
  tuition =  0;
  supplies =  0;
  roomAndBoardMonths =  0;
  roomAndBoard =  0;
  healthInsurance =  0;
  miscellaneous =  0;
  transportation =  0;
  airfare =  0;
  totalExpenses =  0;
  financialExpenseTermType = 0;
  financialExpenseSemesterSpecific = 0;
  pellGrant =  0;
  collegeScholarship =  0;
  otherScholarship =  0;
  parentalSupport =  0;
  personalAssets =  0;
  othersFinancial =  0;
  totalFinancial =  0;
  totalFinAssistanceNeeded =  0;
  awardAmount = null;
  hasFather =  false;
  hasMother =  false;
  hasGuardian = false;
  approvalStatus = 0;
  viewed = false;
}

abstract class Contact implements ContactInterface {
  lastName = null;
  firstName = null;
  country = null;
  state_atoll = null;
  address = null;
  zip = null;
  phone = null;
  email = null;
  relationship = null;
}

export class CurrentContact extends Contact {};
export class PermanentContact extends Contact {};
export class EmergencyContact extends Contact {};

abstract class Parent implements ParentInterface {
  firstName = null;
  lastName = null;
  alive = false;
  age = null;
  employer = null;
  annualIncome = null;
}

export class Father extends Parent {};
export class Mother extends Parent {};
export class Guardian extends Parent {};

export class CurrentCollege implements SchoolInterface {
  name = null;
  country = null;
  state_atoll = null;
  address = null;
  zip = null;
}

export class PriorCollege implements PriorCollegeInterface {
  name = null;
  country = null;
  state_atoll = null;
  address = null;
  zip = null;
  degreeObtained = null;
}

export class HighSchool implements HighSchoolInterface {
  name = null;
  country = null;
  state_atoll = null;
  address = null;
  zip = null;
  highSchoolStartDate = format(new Date(), 'YYYY-MM-DD');
  highSchoolEndDate = format(new Date(), 'YYYY-MM-DD');
  highSchoolGradDate = format(new Date(), 'YYYY-MM-DD');
}
