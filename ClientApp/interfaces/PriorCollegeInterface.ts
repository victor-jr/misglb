import SchoolInterface from "./SchoolInterface";

export default interface PriorCollegeInterface extends SchoolInterface {
  degreeObtained: string | null,
}
