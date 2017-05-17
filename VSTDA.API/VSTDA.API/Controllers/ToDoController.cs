using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using VSTDA.API.Models;

namespace VSTDA.API.Controllers
{
    public class ToDoController : ApiController
    {
        // GET: api/ToDoList
        public IEnumerable<Todo> Get()
        {
            return new Todo[]
            {
               new Todo{ Activity = "Working", Priority = 2 }
            };
        }

        // GET: api/ToDoList/5
        public Todo Get(int id)
        {
            return new Todo { Activity = "Show Up", Priority = 3 };
        }

        // POST: api/ToDoList
        public Todo Post(Todo todo)
        {
            return todo;
        }

        // PUT: api/ToDoList/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ToDoList/5
        public void Delete(int id)
        {
        }
    }
};
