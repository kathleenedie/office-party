using System;
using System.Collections.Generic;

namespace office.Models
{
    public interface IUserRepository
    {
        IEnumerable<UserModel> GetAll();

        UserModel Add(UserModel user);
    }
}