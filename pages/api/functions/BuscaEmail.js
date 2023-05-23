import admin from '../../../lib/firebaseAdmin'

export default async function handler(req, res) { 
    return new Promise ((resolve,reject)=>{
        console.log('Executando a API...')
        let email = req.body
        try{
            if (req.method === 'POST') {
                admin.auth().getUserByEmail(email).then((UserRecord)=> {res.status(200).json({uid:UserRecord.uid})})
                return resolve
            }
        } catch (e) {
        console.error('Erro ao tentar atualizar os dados!')
        console.log(e)
        res.status(400).end()
        return reject
        }
    })}