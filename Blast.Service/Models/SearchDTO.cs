using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace Blast.Service.Models
{
    public class SearchDTO
    {
        public SearchDTO()
        {
            Databases = new List<int>();
        }

        [Required]
  
        public string Query { get; set; }

        public string Email { get; set; }

        [Required]
        public int ExpectThreshold { get; set; }
        [Required]
        public int SearchAlgorithm { get; set; }
        [Required]
        public int DiversityAlgorithm { get; set; }
        [Required]
        public double DiversityRatio { get; set; }
        public int MaxTargetSequences { get; set; }

        [Required]
        public IList<int> Databases { get; set; }
    }
} 