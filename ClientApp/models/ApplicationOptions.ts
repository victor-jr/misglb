interface ApprovalStatusInterface {
  IN_REVIEW: number,
  APPROVED: number,
  DECLINED: number,
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