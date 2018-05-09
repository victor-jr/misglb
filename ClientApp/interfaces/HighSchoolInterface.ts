import SchoolInterface from "./SchoolInterface";

export default interface HighSchoolInterface extends SchoolInterface {
  highSchoolStartDate: string,
  highSchoolEndDate: string,
  highSchoolGradDate: string,
} 