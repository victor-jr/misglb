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
        public DbSet<Parent> Parents { get; set; }
        public DbSet<School> Schools { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Application>().ToTable("Application");
            modelBuilder.Entity<Contact>().ToTable("Contact");
            modelBuilder.Entity<Parent>().ToTable("Parent");
            modelBuilder.Entity<School>().ToTable("School");

            // modelBuilder.Entity<IdentityRole>(entity => entity.Property(m => m.Id).HasMaxLength(85));
            // modelBuilder.Entity<IdentityRole>(entity => entity.Property(m => m.NormalizedName).HasMaxLength(85));
            // modelBuilder.Entity<IdentityUserLogin<string>>(entity => entity.Property(m => m.LoginProvider).HasMaxLength(85));
            // modelBuilder.Entity<IdentityUserLogin<string>>(entity => entity.Property(m => m.ProviderKey).HasMaxLength(85));
            // modelBuilder.Entity<IdentityUserLogin<string>>(entity => entity.Property(m => m.UserId).HasMaxLength(85));
            // modelBuilder.Entity<IdentityUserRole<string>>(entity => entity.Property(m => m.UserId).HasMaxLength(85));
            // modelBuilder.Entity<IdentityUserRole<string>>(entity => entity.Property(m => m.RoleId).HasMaxLength(85));
            // modelBuilder.Entity<IdentityUserToken<string>>(entity => entity.Property(m => m.UserId).HasMaxLength(85));
            // modelBuilder.Entity<IdentityUserToken<string>>(entity => entity.Property(m => m.LoginProvider).HasMaxLength(85));
            // modelBuilder.Entity<IdentityUserToken<string>>(entity => entity.Property(m => m.Name).HasMaxLength(85));
            // modelBuilder.Entity<IdentityUserClaim<string>>(entity => entity.Property(m => m.Id).HasMaxLength(85));
            // modelBuilder.Entity<IdentityUserClaim<string>>(entity => entity.Property(m => m.UserId).HasMaxLength(85));
            // modelBuilder.Entity<IdentityRoleClaim<string>>(entity => entity.Property(m => m.Id).HasMaxLength(85));
            // modelBuilder.Entity<IdentityRoleClaim<string>>(entity => entity.Property(m => m.RoleId).HasMaxLength(85));

            modelBuilder.Entity<Application>()
                .Property(p => p.TotalExpenses)
                .HasComputedColumnSql("`Tuiton` + `Supplies` + `RoomAndBoard` + `HealthInsurance` + `Miscellaneous` + `Transportation` + `Airfare`");
            modelBuilder.Entity<Application>()
                .Property(p => p.PersonalAssets)
                .HasComputedColumnSql("`SavingsDividendsInterests` + `EmploymentIncome` + `SpouseIncome` + `GovernmentSalary` + `Compensation` + `OthersResources`");
            modelBuilder.Entity<Application>()
                .Property(p => p.TotalFinancial)
                .HasComputedColumnSql("`PellGrant` + `CollegeScholarship` + `OtherScholarship` + `ParentalSupport` + `SavingsDividendsInterests` + `EmploymentIncome` + `SpouseIncome` + `GovernmentSalary` + `Compensation` + `OthersResources` + `OthersFinancial`");
            modelBuilder.Entity<Application>()
                .Property(p => p.TotalFinAssistanceNeeded)
                .HasComputedColumnSql("(`Tuiton` + `Supplies` + `RoomAndBoard` + `HealthInsurance` + `Miscellaneous` + `Transportation` + `Airfare`) - (`PellGrant` + `CollegeScholarship` + `OtherScholarship` + `ParentalSupport` + `SavingsDividendsInterests` + `EmploymentIncome` + `SpouseIncome` + `GovernmentSalary` + `Compensation` + `OthersResources` + `OthersFinancial`)");

        }
    }
}
