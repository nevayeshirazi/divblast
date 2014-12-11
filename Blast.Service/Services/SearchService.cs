using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Blast.Service.Models;
using Bio.Web.Blast;
using Bio;
using System.Threading;
using System.IO;

namespace Blast.Service.Services
{
    public class SearchService : ISearchService
    {
        public async Task<bool> Search(SearchDTO parameters)
        {
            try
            {
                // Create sequence from user input
                ISequence sequence = new Sequence(Alphabets.AmbiguousProtein, parameters.Query);

                // Create the blast web service
                IBlastWebHandler blastService = new Bio.Web.Blast.NcbiBlastWebHandler();

                // Specify delegate receive update messages as the query processed
                blastService.LogOutput = (x) => BlastMessage(x); 

                // Parameters to blast query
                var blastParameters = new BlastRequestParameters();
                blastParameters.Database = "swissprot";
                blastParameters.Program = "blastp";
                blastParameters.Sequences.Add(sequence);

                // Send query async and cancel if it takes longer than 2 minutes
                Stream result = await blastService.ExecuteAsync(blastParameters, new CancellationTokenSource(TimeSpan.FromMinutes(2)).Token);

                // Read results from blast service
                StreamReader reader = new StreamReader(result);
                string text = reader.ReadToEnd();

                return true;
            }
            catch (Exception exception)
            {
                // TODO: Log the exception

                return false;
            }
        }

        private void BlastMessage(string message)
        {

        }
    }
}
