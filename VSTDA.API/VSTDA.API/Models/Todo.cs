using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace VSTDA.API.Models
{
    public class Todo
    {
        //primary key
        [System.ComponentModel.DataAnnotations.Key]
        public int TodoEntryID { get; set; }

        //additional columns
        public String Activity { get; set; }
        public int Priority { get; set; }
        public DateTime DateAdded { get; set; }
    }
}