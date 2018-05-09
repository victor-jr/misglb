using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Misglb.Binders;
using Misglb.Validations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Misglb.Models
{
    public enum ApplicationStatus
    {
        New, Ongoing, Returning
    }

    public enum MartialStatus
    {
        [Display(Name = "Single")]
        Single,
        [Display(Name = "Married")]
        Married,
        [Display(Name = "Widowed/Divorced/Seperate")]
        Widowed_Divorced_Seperate
    }

    public enum ParentsStatus
    {
        Married, Separated, Divorced, Widowed
    }

    public enum CollegeStanding
    {
        Freshman, Sophmore, Junior, Senior
    }

    public enum ExpenseType
    {
        [Display(Name = "Per Academic Year")]
        Per_Academic_Year,
        [Display(Name = "One Term")]
        One_Term,
        [Display(Name = "Summer")]
        Summer
    }

    public enum TuitionType
    {
        [Display(Name = "Resident")]
        Resident,
        [Display(Name = "Non-Resident")]
        Non_Resident,
        [Display(Name = "N/A")]
        NA
    }

    public enum Gender
    {
        Male, Female
    }

    public enum Semester
    {
        Spring, Fall
    }

    public enum ApprovalStatus
    {
        [Display(Name = "In Review")]
        In_Review, 
        Approved,
        Declined
    }

    public class Application
    {
        [Key]
        public int ID { get; set; }

        public IdentityUser IdentityUser { get; set; }

        [Required]
        [DataType(DataType.Date)]
        [Display(Name = "Academic Start")]
        public DateTime AcademicYearStart { get; set; }

        [Required]
        [DataType(DataType.Date)]
        [Display(Name = "Academic End")]
        public DateTime AcademicYearEnd { get; set; }

        [Display(Name = "Academic Year")]
        public string AcademicYear
        {
            get
            {
                return AcademicYearStart.Year + "-" + AcademicYearEnd.Year;
            }
        }

        [Required]
        [Display(Name = "Summer Application")]
        public bool IsSummerApplication { get; set; }

        [Required]
        [Display(Name = "Application Status")]
        public ApplicationStatus ApplicationStatus { get; set; }

        [Required]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Required]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Display(Name = "Nick Name")]
        public string NickName { get; set; }

        [Display(Name = "Full Name")]
        public string FullName
        {
            get
            {
                return LastName + ", " + FirstName;
            }
        }

        [Required]
        public string SSN { get; set; }

        [Display(Name = "Current Contact")]
        public CurrentContact CurrentContact { get; set; }

        [Display(Name = "Permanent Contact")]
        public PermanentContact PermanentContact { get; set; }

        [Display(Name = "Emergency Contact")]
        public EmergencyContact EmergencyContact { get; set; }

        [Required]
        public Gender Gender { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime DOB { get; set; }

        [Required]
        [Display(Name = "Place of Birth")]
        public string PlaceOfBirth { get; set; }

        [Required]
        public int Age { get; set; }

        [Required]
        [Display(Name = "Home Atoll")]
        public string HomeAtoll { get; set; }

        [Required]
        [Display(Name = "Ebeye/Kwaj Resident or LandOwner")]
        public bool EbeyeKwajResOrLandOwner { get; set; }

        [Display(Name = "Martial Status")]
        public MartialStatus MartialStatus { get; set; }

        [Display(Name = "Spouse Name")]
        public string SpouseName { get; set; }

        [Display(Name = "Has Children")]
        public bool hasChildren { get; set; }

        [Display(Name = "Name and Age of Your Children")]
        [DataType(DataType.MultilineText)]
        public string Children { get; set; }


        [Display(Name = "Parent's Martial Status")]
        public ParentsStatus ParentMartialStatus { get; set; }

        [NotMapped]
        [Display(Name = "Have Father")]
        public bool HasFather { get; set; }

        [ParentAttributeIfHasCheck("HasFather")]
        [ModelBinder(BinderType = typeof(ParentOptionalBinder), Name = "Father")]
        public Father Father { get; set; }

        [NotMapped]
        [Display(Name = "Have Mother")]
        public bool HasMother { get; set; }

        [ParentAttributeIfHasCheck("HasMother")]
        [ModelBinder(BinderType = typeof(ParentOptionalBinder), Name = "Mother")]
        public Mother Mother { get; set; }

        [NotMapped]
        [Display(Name = "Have Guardian")]
        public bool HasGuardian { get; set; }

        [ParentAttributeIfHasCheck("HasGuardian")]
        [ModelBinder(BinderType = typeof(ParentOptionalBinder), Name = "Guardian")]
        public Guardian Guardian { get; set; }

        /*
        [Display(Name = "Current College")]
        public CurrentCollege CurrentCollege { get; set; }

        [Required]
        [Display(Name = "Degree Sought")]
        public string DegreeSought { get; set; }

        [Required]
        [Display(Name = "College Standing")]
        public CollegeStanding CollegeStanding { get; set; }

        [Display(Name = "Field of Study")]
        public string FieldOfStudy { get; set; }

        [DataType(DataType.Date)]
        [Display(Name = "Date of Graduation")]
        public DateTime DateOfGraduation { get; set; }

        [NotMapped]
        [Display(Name = "Have Prior College")]
        public bool HasPriorCollege { get; set; }

        [Display(Name = "Prior College")]
        [PriorCollegeIfHasCheck("HasPriorCollege")]
        [ModelBinder(BinderType = typeof(PriorCollegeOptionalBinder), Name = "PriorCollege")]
        public PriorCollege PriorCollege { get; set; }

        [Required]
        [DataType(DataType.Date)]
        [Display(Name = "Date of MISGLB Financial Aid Needed")]
        public DateTime DateFinAidNeeded { get; set; }

        [Display(Name = "High School")]
        public HighSchool HighSchool { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        [Display(Name = "Savings, Dividends, Interests..")]
        public decimal SavingsDividendsInterests { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        [Display(Name = "Employment Income")]
        public decimal EmploymentIncome { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        [Display(Name = "Spouse Income")]
        public decimal SpouseIncome { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        [Display(Name = "Government Salary")]
        public decimal GovernmentSalary { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        public decimal Compensation { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        [Display(Name = "Other Resources")]
        public decimal OthersResources { get; set; }

        [Required]
        [Display(Name = "Received Financial Aid Before")]
        public bool ReceivedFinAidBefore { get; set; }

        [DataType(DataType.Date)]
        [Display(Name = "Date Received Financial Aid Before")]
        public DateTime ReceivedFinAidBeforeDate { get; set; }

        [Required]
        [ExpenseTermSemester("Education")]
        [Display(Name = "Education Expense Term type")]
        public ExpenseType? EducationExpenseTermType { get; set; }

        [Display(Name = "Education Expense Term Semester")]
        public Semester? ExpenseTermSemesterSpecific { get; set; }

        [Required]
        [Display(Name = "Tuition Type")]
        public TuitionType TuitionType { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        public decimal Tuiton { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        public decimal Supplies { get; set; }

        [Required]
        [Display(Name = "Months for Room and Board")]
        public int RoomAndBoardMonths { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        [Display(Name = "Room and Board")]
        public decimal RoomAndBoard { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        [Display(Name = "Health Insurance")]
        public decimal HealthInsurance { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        public decimal Miscellaneous { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        public decimal Transportation { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        public decimal Airfare { get; set; }

        [Required]
        [Display(Name = "Total Expenses")]
        [Column(TypeName = "decimal")]
        public decimal TotalExpenses { get; private set; }

        [Required]
        [ExpenseTermSemester("Financial")]
        [Display(Name = "Financial Expense Term Type")]
        public ExpenseType FinancialExpenseTermType { get; set; }

        [Display(Name = "Financial Expense Term Semester")]
        public TuitionType? FinancialExpenseTermSemesterSpecific { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        [Display(Name = "Pell Grant")]
        public decimal PellGrant { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        [Display(Name = "College Scholarship")]
        public decimal CollegeScholarship { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        [Display(Name = "Other Scholarship")]
        public decimal OtherScholarship { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        [Display(Name = "Parental Support")]
        public decimal ParentalSupport { get; set; }

        [Required]
        [Column(TypeName = "decimal")]
        [Display(Name = "Personal Assets")]
        public decimal PersonalAssets { get; private set; }

        [Required]
        [Column(TypeName = "decimal")]
        [Display(Name = "Other Financial Expenses")]
        public decimal OthersFinancial { get; set; }

        [Required]
        [Display(Name = "Total Financial")]
        [Column(TypeName = "decimal")]
        public decimal TotalFinancial { get; private set; }

        [Required]
        [Display(Name = "Total Aid Needed")]
        [Column(TypeName = "decimal")]
        public decimal TotalFinAssistanceNeeded { get; private set; }

        [Display(Name = "Approval Status")]
        public ApprovalStatus ApprovalStatus { get; set; }

        public bool Viewed { get; set; }

        */
    }
}
