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

        }

        // GET: api/ToDoList/5
        public Todo Get(int id)
        {

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
}
