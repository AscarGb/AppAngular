using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using TestApp.App_Start;
using TestApp.UserManager;

namespace TestApp
{
    public class AuthContext : IdentityDbContext<IdentityUser>
    {
        public AuthContext() : base("AuthContext")
        {
            Database.SetInitializer<AuthContext>(new MyContextInitializer());
        }
        public DbSet<Client> Clients { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }
    }

    public class MyContextInitializer : CreateDatabaseIfNotExists<AuthContext>
    {
        protected override void Seed(AuthContext context)
        {
            UserManager<IdentityUser> _userManager = new UserManager<IdentityUser>(new UserStore<IdentityUser>(context));
            RoleManager<IdentityRole> _roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));

            context.Clients.Add(new Client
            {
                Id = "ngAuth",
                Secret = Helper.GetHash(WebConfigurationManager.AppSettings["ngAuthSecret"]),
                Name = "Web App",
                ApplicationType = Models.ApplicationTypes.JavaScript,
                Active = true,
                AllowedOrigin = "http://localhost:8082/",
                RefreshTokenLifeTime = 60 * 24
            });

            context.Clients.Add(new Client
            {
                Id = "App",
                Secret = Helper.GetHash(WebConfigurationManager.AppSettings["AppSecret"]),
                Name = "Desktop App",
                ApplicationType = Models.ApplicationTypes.NativeConfidential,
                Active = true,
                AllowedOrigin = "*",
                RefreshTokenLifeTime = 60 * 24
            });

            IdentityUser user = new IdentityUser { UserName = "admin" };

            _userManager.Create(user, WebConfigurationManager.AppSettings["defaultAdminPsw"]);

            _roleManager.Create(new IdentityRole { Name = ServerRoles.Admin });
            _roleManager.Create(new IdentityRole { Name = ServerRoles.User });

            _userManager.AddToRole(user.Id, ServerRoles.Admin);
        }
    }
}