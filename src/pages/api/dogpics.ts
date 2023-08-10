import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { data } = await axios.get(
        'https://api.thedogapi.com/v1/images/search',
    );
    res.status(200).json({
        url: data[0].url
    });
}