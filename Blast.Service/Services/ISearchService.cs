using Blast.Service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blast.Service.Services
{
    public interface ISearchService
    {
        Task<bool> Search(SearchDTO parameters);
    }
}
