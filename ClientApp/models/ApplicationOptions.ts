interface ApprovalStatusInterface {
  IN_REVIEW: number,
  APPROVED: number,
  DECLINED: number,
  properties: {
    [key: number] : { name: string, value: number }
  },  
}

interface GenderInterface {
  MALE: number,
  FEMALE: number,
  properties: {
    [key: number] : { name: string, value: number }
  },  
}

interface MartialInterface {
  SINGLE: number,
  MARRIED: number,
  WDS: number
  properties: {
    [key: number] : { name: string, value: number }
  },  
}

interface TermTypeInterface {
  PERACADEMICYEAR: number,
  ONETERM: number,
  SUMMER: number
  properties: {
    [key: number] : { name: string, value: number }
  },  
}

interface SemesterInterface {
  FALL: number,
  SPRING: number,
  properties: {
    [key: number] : { name: string, value: number }
  },  
}

interface TuitionTypeInterface {
  RESIDENT: number,
  NONRESIDENT: number,
  NA: number,
  properties: {
    [key: number] : { name: string, value: number }
  },  
}

export const ApprovalStatus: ApprovalStatusInterface = {
  IN_REVIEW: 0,
  APPROVED: 1,
  DECLINED: 2,
  properties: {
    0: { name: 'In Review', value: 0 },
    1: { name: 'Approved', value: 1 },
    2: { name: 'Declined', value: 2 }    
  }
}

export const Gender: GenderInterface = {
  MALE: 0,
  FEMALE: 1,
  properties: {
    0: { name: 'Male', value: 0 },
    1: { name: 'Female', value: 1 },
  }
}

export const MartialStatus: MartialInterface = {
  SINGLE: 0,
  MARRIED: 1,
  WDS: 2,
  properties: {
    0: { name: 'Single', value: 0 },
    1: { name: 'Married', value: 1 },
    2: { name: 'Widowed/Divorced/Seperate', value: 2 },
  }
}

export const TermType: TermTypeInterface = {
  PERACADEMICYEAR: 0,
  ONETERM: 1,
  SUMMER: 2,
  properties: {
    0: { name: 'Per Academic Year', value: 0 },
    1: { name: 'One Term', value: 1 },
    2: { name: 'Summer', value: 2 },
  }
}

export const Semester: SemesterInterface = {
  FALL: 0,
  SPRING: 1,
  properties: {
    0: { name: 'Fall', value: 0 },
    1: { name: 'Spring', value: 1 }
  }
}

export const TuitionType: TuitionTypeInterface = {
  RESIDENT: 0,
  NONRESIDENT: 1,
  NA: 2,
  properties: {
    0: { name: 'Resident', value: 0 },
    1: { name: 'Non-Resident', value: 1 },
    2: { name: 'N/A', value: 2 },
  }
}