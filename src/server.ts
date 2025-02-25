import {app} from './app'
import {config} from 'dotenv'

config()

app.listen(process.env.PORT, () => {
     console.log(`servidor rodando na porta: 3333`)
})