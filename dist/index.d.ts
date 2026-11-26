import { z } from "zod";
declare const UserSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    email: z.ZodString;
}, z.core.$strip>;
type User = z.infer<typeof UserSchema>;
export declare function fetchUser(id: number): Promise<User>;
export declare function formatWelcomeMessage(user: User): string;
export {};
//# sourceMappingURL=index.d.ts.map