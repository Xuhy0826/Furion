﻿using Fur;
using Fur.CorsAccessor;
using Fur.DependencyInjection;

namespace Microsoft.AspNetCore.Builder
{
    /// <summary>
    /// 跨域中间件拓展
    /// </summary>
    [SkipScan]
    public static class CorsAccessorApplicationBuilderExtensions
    {
        /// <summary>
        /// 添加跨域中间件
        /// </summary>
        /// <param name="app"></param>
        /// <returns></returns>
        public static IApplicationBuilder UseCorsAccessor(this IApplicationBuilder app)
        {
            // 获取选项
            var corsAccessorSettings = App.GetOptions<CorsAccessorSettingsOptions>();

            // 配置跨域中间件
            app.UseCors(corsAccessorSettings.PolicyName);

            // 添加压缩缓存
            app.UseResponseCaching();

            return app;
        }
    }
}