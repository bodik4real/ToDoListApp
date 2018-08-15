using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Services;

namespace WebApi
{
    public static class ServiceBootstrapper
    {

        public static void RegisterCustomServices(this IServiceCollection services)
        {
            services.AddTransient<ITaskItemService, TaskItemService>();
            services.AddTransient<IBoardService, BoardService>();
        }
    }
}
