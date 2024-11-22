import jwt from "jsonwebtoken"

export const Auth = {
    private: async (req, res, next) => {
        let sucess = false
        //fazer verificação
        if(req.headers.authorization){
            const [AuthType, token] = req.headers.authorization.split(' ')
            if(AuthType === 'Bearer') {
                try{
                    jwt.verify(token, process.env.JWT_SECRET_KEY)
                    sucess = true
                } catch (err){
                    console.error(err)
                }
            }
        }
        if(sucess){
            next()
        } else {
            res.status(403) //nao permitido
            res.json({ error : 'Não autorizado'})
        }
    }
}