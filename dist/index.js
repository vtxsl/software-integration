"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = fetchUser;
exports.formatWelcomeMessage = formatWelcomeMessage;
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const date_fns_1 = require("date-fns");
const zod_1 = require("zod");
const app = (0, express_1.default)();
const port = process.env.PORT ?? 3000;
// Schema validation with Zod
const UserSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
});
async function fetchUser(id) {
    const response = await axios_1.default.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return UserSchema.parse(response.data);
}
function formatWelcomeMessage(user) {
    const today = (0, date_fns_1.format)(new Date(), "MMMM do, yyyy");
    return `Hello, ${user.name}! Today is ${today}.`;
}
app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
});
app.get("/user/:id", async (req, res) => {
    try {
        const user = await fetchUser(Number(req.params.id));
        res.send(formatWelcomeMessage(user));
    }
    catch {
        res.status(500).json({ error: "Failed to fetch user" });
    }
});
if (process.env.NODE_ENV !== "test") {
    app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    });
}
//# sourceMappingURL=index.js.map