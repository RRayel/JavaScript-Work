var tasklist = { 
    tasks: [],  
    storage: getTaskStorage("tasks_11"), 
    displayDiv: null, 
    deleteClickHandler: null, 
    load: function() { 
    if (this.tasks.length === 0) { 
    tasklist.tasks = this.storage.get(); 
    } 
    }, 
    save: function() { 
    this.storage.set(this.tasks); 
    }, 
    sort: function() { 
    this.tasks.sort(); 
    }, 
    add: function(task) { 
    this.tasks.push(task.toString());  
    }, delete: function(i) { 
        this.sort(); 
        this.tasks.splice(i, 1); 
        }, 
        clear: function() { 
        this.tasks.length = 0; 
        this.storage.clear(); 
        this.displayDiv.innerHTML = ""; 
        }, display: function() { 
            var html = ""; 
            this.sort(); 
            for (var i in this.tasks) { 
            html = html.concat("<p>"); 
            html = html.concat("<a href='#' title='",  
            i, "'>Delete</a>"); 
            html = html.concat(this.tasks[i]); 
            html = html.concat("</p>"); 
            } 
            this.displayDiv.innerHTML = html; 
            var links =  
            this.displayDiv.getElementsByTagName("a"); 
            for (var i = 0; i < links.length; i++) { 
            links[i].onclick = this.deleteClickHandler; 
            } 
            } 
            };