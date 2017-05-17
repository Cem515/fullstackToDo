using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;


namespace VSTDA.API.Infrastructure
{
    public class TodoDataContext: DbContext
    {
        public TodoDataContext() : base ("VSTDA")
            {

            }

        public IDbSet<Models.Todo> Activities { get; set; }

        public System.Data.Entity.DbSet<VSTDA.API.Models.Todo> Todoes { get; set; }
    }
}