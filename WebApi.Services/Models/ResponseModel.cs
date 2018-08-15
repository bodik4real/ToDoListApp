using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Services.Models
{
    public class ResponseModel
    {
        public bool IsSuccessful { get; set; }

        public string ErrorMessage { get; set; }
    }

    public class ResponseModel<T> : ResponseModel
    {
        public T Result { get; set; }
    }
}
