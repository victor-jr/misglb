using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Misglb.Models;

namespace Misglb.Data
{
    public class DbInitializer
    {

        public void Initialize(MisglbDbContext context)
        {
            context.Database.EnsureCreated();

            // Look for any applications
            if (context.Applications.Any())
            {
                Console.WriteLine("Applications exists.");
                return; // DB has been seeded
            }

            // var role = new IdentityRole
            // {
            //     Name = "Admin"
            // };
            // _roleManager.CreateAsync(role);

            // string email = "admin@fake.com";

            // var user = new IdentityUser { UserName = email, Email = email };

            // string userPWD = "Password_123";

            // Task<IdentityResult> userCreateTask = _userManager.CreateAsync(user, userPWD);
            // userCreateTask.Wait();
            //Task<string> code =  _userManager.GenerateEmailConfirmationTokenAsync(user);
            //_userManager.ConfirmEmailAsync(user, code.Result);
            // Task<IdentityResult> roleCreateTask = _userManager.AddToRoleAsync(user, "Admin");
            // roleCreateTask.Wait();

            var applications = new Application[]
            {
                new Application
                {
                    // IdentityUser = user,
                    AcademicYearStart = DateTime.Parse("2017-08-08"),
                    AcademicYearEnd = DateTime.Parse("2018-01-08"),
                    IsSummerApplication = false,
                    ApplicationStatus = ApplicationStatus.Ongoing,
                    LastName = "Garcia",
                    FirstName = "Victor",
                    // No nickname
                    SSN = "04-12345",
                    Gender = Gender.Male,
                    DOB = DateTime.Parse("1989-08-07"),
                    PlaceOfBirth = "Jaluit",
                    Age = 28,
                    HomeAtoll = "Jaluit",
                    EbeyeKwajResOrLandOwner = false,
                    MartialStatus = MartialStatus.Single,
                    // No Children
                    ParentMartialStatus = ParentsStatus.Married,
                    DegreeSought = "M.A.",
                    CollegeStanding = CollegeStanding.Senior,
                    FieldOfStudy = "MIS",
                    DateOfGraduation = DateTime.Parse("2012-05-01"),
                    DateFinAidNeeded = DateTime.Parse("2017-11-01"),
                    SavingsDividendsInterests = 0,
                    EmploymentIncome = 0,
                    SpouseIncome = 0,
                    GovernmentSalary = 0,
                    Compensation = 0,
                    OthersResources = 0,
                    ReceivedFinAidBefore = true,
                    ReceivedFinAidBeforeDate = DateTime.Parse("2012-09-01"),
                    EducationExpenseTermType = ExpenseType.One_Term,
                    ExpenseTermSemesterSpecific = Semester.Spring,
                    // no expensetermsemesterspecific
                    TuitionType = TuitionType.NA,
                    Tuiton = 100.00m,
                    Supplies = 100.00m,
                    RoomAndBoardMonths = 4,
                    RoomAndBoard = 100.00m,
                    HealthInsurance = 100.00m,
                    Miscellaneous = 100.00m,
                    Transportation = 100.00m,
                    Airfare = 100.00m,
                    // total expenses automatically summed and set
                    FinancialExpenseTermType = ExpenseType.Per_Academic_Year,
                    // no financialtermsemesterspecific
                    PellGrant = 0,
                    CollegeScholarship = 0,
                    OtherScholarship = 0,
                    ParentalSupport = 0,
                    // personalassets automatically set from assets
                    OthersFinancial = 0,
                    // totalfinancial auto summed and set
                    // totalfinassistanceneeded auto summed and set
                    HasFather = true,
                    HasMother = true
                },
                new Application
                {
                    // IdentityUser = user,
                    AcademicYearStart = DateTime.Parse("2017-08-08"),
                    AcademicYearEnd = DateTime.Parse("2018-01-08"),
                    IsSummerApplication = false,
                    ApplicationStatus = ApplicationStatus.New,
                    LastName = "Billy",
                    FirstName = "Bob",
                    // No nickname
                    SSN = "04-11111",
                    Gender = Gender.Male,
                    DOB = DateTime.Parse("1989-09-07"),
                    PlaceOfBirth = "Majuro",
                    Age = 21,
                    HomeAtoll = "Majuro",
                    EbeyeKwajResOrLandOwner = false,
                    MartialStatus = MartialStatus.Single,
                    // No Children
                    ParentMartialStatus = ParentsStatus.Married,
                    DegreeSought = "B.A.",
                    CollegeStanding = CollegeStanding.Freshman,
                    DateFinAidNeeded = DateTime.Parse("2017-11-01"),
                    SavingsDividendsInterests = 300.00M,
                    EmploymentIncome = 0,
                    SpouseIncome = 0,
                    GovernmentSalary = 0,
                    Compensation = 0,
                    OthersResources = 0,
                    ReceivedFinAidBefore = false,
                    // receivedFinAidBeforeDate not needed
                    EducationExpenseTermType = ExpenseType.Per_Academic_Year,
                    // No ExpenseTermSemesterSpecific
                    TuitionType = TuitionType.NA,
                    Tuiton = 100.00m,
                    Supplies = 200.00M,
                    RoomAndBoardMonths = 4,
                    RoomAndBoard = 200.00M,
                    HealthInsurance = 200.00M,
                    Miscellaneous = 200.00M,
                    Transportation = 200.00M,
                    Airfare = 100.00M,
                    // Total expenses automatically summed and set
                    FinancialExpenseTermType = ExpenseType.Per_Academic_Year,
                    // No FinancialTermSemesterSpecific
                    PellGrant = 0,
                    CollegeScholarship = 0,
                    OtherScholarship = 0,
                    ParentalSupport = 500.00M,
                    // PersonalAssets automatically set from assets
                    OthersFinancial = 0,
                    // TotalFinancial auto summed and set
                    // totalFinAssistanceNeeded auto summed and set
                    HasFather = true,
                    HasMother = true
                }
            };
            foreach (Application a in applications)
            {
                context.Applications.Add(a);
            }            
            context.SaveChanges();
            List<Application> apps1 = new List<Application>();
            apps1.Add(applications[0]);

            List<Application> apps2 = new List<Application>();
            apps2.Add(applications[1]);

            // Current Contacts
            var currentContacts = new CurrentContact[]
            {
                new CurrentContact
                {
                    Application = apps1,
                    Country = "RMI",
                    State_Atoll = "Majuro",
                    Address = "PO Box 123",
                    Zip = "96960",
                    Phone = "6924562596",
                    Email = "victorjr@gmail.com"
                },
                new CurrentContact
                {
                    Application = apps2,
                    Country = "RMI",
                    State_Atoll = "Majuro",
                    Address = "PO Box 111",
                    Zip = "96960",
                    Phone = "6924562596",
                    Email = "bill@gmail.com"
                }
            };
            foreach (CurrentContact c in currentContacts)
            {
                context.Contacts.Add(c);
            }
            context.SaveChanges();

            // Permanent Contacts
            var permanentContacts = new PermanentContact[]
            {
                new PermanentContact
                {
                    Application = apps1,
                    Country = "RMI",
                    State_Atoll = "Majuro",
                    Address = "PO Box 123",
                    Zip = "96960",
                    Phone = "6924562596"
                },
                new PermanentContact
                {
                    Application = apps2,
                    Country = "RMI",
                    State_Atoll = "Majuro",
                    Address = "PO Box 111",
                    Zip = "96960",
                    Phone = "6924562596"
                }
            };
            foreach (PermanentContact p in permanentContacts)
            {
                context.Contacts.Add(p);
            }
            context.SaveChanges();

            // Emergency Contacts
            var emergencyContacts = new EmergencyContact[]
            {
                new EmergencyContact
                {
                    Application = apps1,
                    LastName = "Garcia",
                    FirstName = "Leilani",
                    Country = "RMI",
                    State_Atoll = "Majuro",
                    Address = "PO Box 123",
                    Zip = "96960",
                    Phone = "6924560277",
                    Email = "econtact@gmail.com"
                },
                new EmergencyContact
                {
                    Application = apps2,
                    LastName = "Jane",
                    FirstName = "Sue",
                    Country = "RMI",
                    State_Atoll = "Majuro",
                    Address = "PO Box 123",
                    Zip = "96960",
                    Phone = "6924560277",
                    Email = "econtact@gmail.com"
                }
            };
            foreach (EmergencyContact e in emergencyContacts)
            {
                context.Contacts.Add(e);
            }
            context.SaveChanges();

            // Fathers
            var fathers = new Father[]
            {
                new Father
                {
                    Application = apps1,
                    FirstName = "Victor",
                    LastName = "Garcia Sr.",
                    Alive = true,
                    Age = 60,
                    // no Employer
                    AnnualIncome = 0
                },
                new Father
                {
                    Application = apps2,
                    FirstName = "Ken",
                    LastName = "Joe",
                    Alive = true,
                    Age = 60,
                    // no Employer
                    AnnualIncome = 0
                }
            };
            foreach (Father f in fathers)
            {
                context.Parents.Add(f);
            }
            context.SaveChanges();

            // Mothers
            var mothers = new Mother[]
            {
                new Mother
                {
                    Application = apps1,
                    FirstName = "Lelani",
                    LastName = "Garcia",
                    Alive = true,
                    Age = 50,
                    Employer = "Polaris",
                    AnnualIncome = 3000.00M
                },
                new Mother
                {
                    Application = apps2,
                    FirstName = "Sara",
                    LastName = "Joe",
                    Alive = true,
                    Age = 50,
                    Employer = "KK",
                    AnnualIncome = 3000.00M
                }
            };
            foreach (Mother m in mothers)
            {
                context.Parents.Add(m);
            }
            context.SaveChanges();

            //Current Colleges
            var currentColleges = new CurrentCollege[]
            {
                new CurrentCollege
                {
                    Name = "UH - Manoa",
                    Country = "US",
                    State_Atoll = "HI",
                    Address = "123 St.",
                    Zip = "96822",
                    Application = apps1
                },
                new CurrentCollege
                {
                    Name = "Chaminade",
                    Country = "US",
                    State_Atoll = "HI",
                    Address = "123 St.",
                    Zip = "96822",
                    Application = apps2
                }
            };
            foreach (CurrentCollege c in currentColleges)
            {
                context.Schools.Add(c);
            }
            context.SaveChanges();

            //Prior Collegs
            var priorColleges = new PriorCollege[]
            {
                new PriorCollege
                {
                    Application = apps1,
                    Name = "UMN Duluth",
                    Country = "US",
                    State_Atoll = "MN",
                    Address = "123 St.",
                    Zip = "56751",
                    DegreeObtained = "B.A.A"
                }
            };
            foreach (PriorCollege p in priorColleges)
            {
                context.Schools.Add(p);
            }
            context.SaveChanges();

            // High Schools
            var highSchools = new HighSchool[]
            {
                new HighSchool
                {
                    Application = apps1,
                    Name = "Roseau High School",
                    Country = "US",
                    State_Atoll = "MN",
                    Address = "123 St.",
                    Zip = "56751",
                    HighSchoolStartDate = DateTime.Parse("2012-09-01"),
                    HighSchoolEndDate = DateTime.Parse("2013-05-01"),
                    HighSchoolGradDate = DateTime.Parse("2013-05-01")
                },
                new HighSchool
                {
                    Application = apps2,
                    Name = "Baptist HS",
                    Country = "RMI",
                    State_Atoll = "Majuro",
                    Address = "123 St.",
                    Zip = "96960",
                    HighSchoolStartDate = DateTime.Parse("2012-09-01"),
                    HighSchoolEndDate = DateTime.Parse("2013-05-01"),
                    HighSchoolGradDate = DateTime.Parse("2013-05-01")
                }
            };
            foreach (HighSchool h in highSchools)
            {
                context.Schools.Add(h);
            }
            context.SaveChanges();
        }
    }
}
