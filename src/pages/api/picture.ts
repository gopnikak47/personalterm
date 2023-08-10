import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { data } = await axios.get(
        'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US',
    );
    const finalURL = new URL(data.images[0].url, "https://www.bing.com");
    res.status(200).json({ url: finalURL.href });
}