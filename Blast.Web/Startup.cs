using Microsoft.Owin;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Microsoft.Owin.Cors;
using Autofac.Integration.WebApi;
using Blast.Service.Services;
using Autofac;
using System.Reflection;

[assembly: OwinStartup(typeof(Blast.Web.Startup))]
namespace Blast.Web
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();
            WebApiConfig.Register(config);
            config.DependencyResolver = RegisterAutoFac();
            app.UseCors(CorsOptions.AllowAll);
            app.UseWebApi(config);
        }

      public AutofacWebApiDependencyResolver RegisterAutoFac()
        {
            // Create the container builder.
            var builder = new ContainerBuilder();

            // Register the Web API controllers.
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            // Register other dependencies.
            builder.RegisterType<SearchService>().As<ISearchService>().InstancePerRequest();

            // Build the container.
            var container = builder.Build();

            // Create the depenedency resolver.
            var resolver = new AutofacWebApiDependencyResolver(container);

            return resolver;
        }

    }
}