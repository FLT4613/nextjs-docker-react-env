// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import env from "@beam-australia/react-env";

export default function hello (req, res)
{
    res.status(200).json(env())
}
