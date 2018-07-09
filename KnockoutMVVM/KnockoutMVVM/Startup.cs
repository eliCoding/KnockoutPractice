using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(KnockoutMVVM.Startup))]
namespace KnockoutMVVM
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
