import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest,
    res: NextApiResponse<any>){
    if(req.method === 'POST'){
        //save to DB!
        console.log(req.body);
        
        res.json({message:'ok'})
    }
}