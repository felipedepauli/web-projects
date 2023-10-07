import { Request , Response } from 'express'
import shortId from 'shortid'
import { config } from '../config/Constant'
import { URLModel } from '../model/URL'

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void> {
        const { originURL } = req.body
        const url = await URLModel.findOne({ originURL })
        if (url)  {
            response.json(url)
            return
        }
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        const newUrl = await URLModel.create({ hash, shortURL, originURL})
        response.json({ originURL, hash, shortURL })
    }
    public async redirect(req: Request, response: Response) : Promise<void> {
        const { hash } = req.params
        const url = {
            originURL: "https://cloud.mongodb.com/v2/62265b85cc0f7c5a9f2c7215#clusters",
            hash: 'IPMDvhS_D',
            shortURL: "http://localhost:5000/IPMDvhS_D"
        }
        response.redirect(url.originURL)
    }

}
