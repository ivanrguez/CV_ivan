$(document).ready(function(){
	var API_URL = 'http://localhost:8000/api/';
	var tasks = [];
	var newBoxCategoria = $('#box-categoria');
	var tasksCategoria = $('#tasksCategoria');
	var loader = $('.loader');


	var drawTasks = function(){
		tasksCategoria.empty();

		if(tasks.length == 0){
			tasksCategoria.append('<select><option class="task-item">No tienes cateorias</option></select>');
			
		}else{

			var contentToAdd = '';
			
			for(var i = 0; i < tasks.length; i++){
			contentToAdd += '<select><option class="update-task-input" value="' + tasks[i].name + '">' + tasks[i].name + '</option></select><button class="deleteTask2" data-task-id="' + tasks[i].id + '">Eliminar</button>';
			
			}
			tasksCategoria.append(contentToAdd);
		}

		
	};

	drawTasks();


	var createTask = function (name){
		var success = function(data){
			newBoxCategoria.val();
			tasks.push(data);
			drawTasks();
		};

		var data = {
			'name': name
		};

		$.ajax({
			type:"POST",
			url: API_URL + "cat",
			data: data,
			success: success

		})
		.fail(function (error) {
			console.error("Error creando tarea.", error);
		});

	}

	var getTasks = function(){
		var success = function(data){
			tasks =data;
			drawTasks();
		}
		var error = function(error) {
			console.error("Error cargando tareas.", error);
		} 

		var complete = function(object, textStatus) {
			loader.fadeOut();
			if (textStatus == 'error') {
				console.log("Ha habido un error, revisalo.");
			} else {
				console.log("Todo ha ido de forma correcta.")
			}
		}

		var beforeSend = function() {
			console.log("Before send");
			loader.show();
		}

		$.ajax({
			type:"GET",
			url: API_URL + "cat",
			success: success,
			error: error,
			complete: complete,
			beforeSend: beforeSend

		});
	}

	var deleteTask2 = function(id){
		var success = function(data){
			tasks = $.grep(tasks, function(item){
				return item.id != id;
			});
			drawTasks();
		
		}


		$.ajax({
			type:"DELETE",
			url: API_URL + "cat/" + id,
			success: success
		})
		.fail(function(error) {
			console.error("Error actualizando tarea", error);
		})
	}

	$('#sendNewTask').on("click", function(event){
		if (newBoxCategoria.val() !=''){
			event.preventDefault();
			createTask(newBoxCategoria.val());
		}
	});
	$(document).on("click", ".deleteTask2", function(event){
		var id = $(this).data('taskId');
		deleteTask2(id);
	});
	
	getTasks();
});
