using Microsoft.Extensions.DependencyInjection;
using WebApi.DAL.Contracts;
using WebApi.DAL.Repositories;
using WebApi.Services;
using WebApi.Services.Contracts;

namespace WebApi
{
    public static class ServiceBootstrapper
    {
        public static void RegisterCustomServices(this IServiceCollection services)
        {
            services.AddTransient<IBoardRepository, BoardRepository>();
            services.AddTransient<ITaskItemRepository, TaskItemRepository>();
            services.AddTransient<ITaskItemService, TaskItemService>();
            services.AddTransient<IBoardService, BoardService>();
        }
    }
}
