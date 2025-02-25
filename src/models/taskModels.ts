import {connection} from './connection'

const getAll = async () => {
     const task = await connection.execute('SELECT * FROM TASK')
     return task
}

export default { // NÃO PRECISA COLOCAR EM CHAVES NA HORA DE IMPORTAR
     getAll,
}    