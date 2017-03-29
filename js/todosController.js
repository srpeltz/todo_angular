(function() {
  'use strict'

  angular.module('todosApp')
    .controller('TodosController', TodosController)


    function TodosController() {
      var self = this

      self.allTodos = [
      {
        id: 0,
        task: 'Turnup at GA happy hour',
        done: false
      },
      {
        id: 1,
        task: 'Recover',
        done: false
      },
      {
        id: 2,
        task: 'Turnup again',
        done: false
      }
    ]


    self.newTodo = {
      task: ''
    }
    self.addTodo = addTodo
    self.ids = 3

    function addTodo() {
      self.allTodos.push({
        id: self.ids,
        task: self.newTodo,
        done: false
      })
      self.ids++
      self.newTodo.task = ''
    }

  }
}())
