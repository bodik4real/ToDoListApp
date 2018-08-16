
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
