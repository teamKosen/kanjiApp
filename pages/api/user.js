import middleware from "../../middleware/database";
import nextConnect from "next-connect";
import { extractUser } from "../../lib/api-helpers";
import { extractCurrentUser } from "../../lib/api-currentUser-helper";

const handler = nextConnect();
handler.use(middleware);
// handler.get(async (req, res) => res.json({ user: extractUser(req) }));
handler.get(async (req, res) => res.json({ user: extractCurrentUser(req) }));
// handler.get(async (req, res) => res.json({ user: "ddddd" }));

export default handler;