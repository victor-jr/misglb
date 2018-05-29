using Misglb.Models;
using Microsoft.EntityFrameworkCore;

namespace Misglb.Data
{
    public class MisglbDbContext : DbContext
    {
        public MisglbDbContext(DbContextOptions<MisglbDbContext> options) : base(options)
        {
        }

        public DbSet<Application> Applications { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<EmergencyContact> EmergencyContact { get; set; }
        public DbSet<Parent> Parents { get; set; }
        public DbSet<School> Schools { get; set; }
        public DbSet<User> Users { get; set; }
        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Application>().ToTable("Application");
            modelBuilder.Entity<Contact>().ToTable("Contact");
            modelBuilder.Entity<EmergencyContact>().ToTable("EmergencyContact");            
            modelBuilder.Entity<Parent>().ToTable("Parent");
            modelBuilder.Entity<School>().ToTable("School");
            modelBuilder.Entity<User>().ToTable("User");          

            modelBuilder.Entity<Application>()
                .Property(a => a.ApprovalStatus)
                .HasDefaultValue(ApprovalStatus.In_Review);  

            modelBuilder.Entity<Application>()
                .Property(p => p.TotalExpenses)
                .HasComputedColumnSql("`Tuition` + `Supplies` + `RoomAndBoard` + `HealthInsurance` + `Miscellaneous` + `Transportation` + `Airfare`");
            modelBuilder.Entity<Application>()
                .Property(p => p.PersonalAssets)
                .HasComputedColumnSql("`SavingsDividendsInterests` + `EmploymentIncome` + `SpouseIncome` + `GovernmentSalary` + `Compensation` + `OthersResources`");
            modelBuilder.Entity<Application>()
                .Property(p => p.TotalFinancial)
                .HasComputedColumnSql("`PellGrant` + `CollegeScholarship` + `OtherScholarship` + `ParentalSupport` + `SavingsDividendsInterests` + `EmploymentIncome` + `SpouseIncome` + `GovernmentSalary` + `Compensation` + `OthersResources` + `OthersFinancial`");
            modelBuilder.Entity<Application>()
                .Property(p => p.TotalFinAssistanceNeeded)
                .HasComputedColumnSql("(`Tuition` + `Supplies` + `RoomAndBoard` + `HealthInsurance` + `Miscellaneous` + `Transportation` + `Airfare`) - (`PellGrant` + `CollegeScholarship` + `OtherScholarship` + `ParentalSupport` + `SavingsDividendsInterests` + `EmploymentIncome` + `SpouseIncome` + `GovernmentSalary` + `Compensation` + `OthersResources` + `OthersFinancial`)");
        }
    }
}
