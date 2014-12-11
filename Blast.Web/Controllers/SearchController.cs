using Blast.Service.Models;
using Blast.Service.Services;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Filters;

namespace Blast.Web.Controllers
{
    public class SearchController : ApiController
    {
        private ISearchService _searchService;

        public SearchController(ISearchService searchService)
        {
            _searchService = searchService;
        }

        [HttpPost]
        [ActionValidation]
        [ActionModelNullCheck]
        public async Task<HttpResponseMessage> BeginSearch(SearchDTO parameters)
        {
            await _searchService.Search(parameters);

            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}
