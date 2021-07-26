const schedule = require('node-schedule')

// formato 'segundo minuto hora diaDoMês mês diaDaSemana'
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function () {
    console.log('Executando Tarefa 1!', new Date().getHours(), ':', new Date().getMinutes(), ':', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 60000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(5, 7)]
regra.hour = 20
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!')
})