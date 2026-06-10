const nodeEnv =
  typeof globalThis !== "undefined" &&
  "process" in globalThis &&
  (globalThis as { process?: { env?: Record<string, string | undefined> } })
    .process?.env
    ? (globalThis as { process?: { env?: Record<string, string | undefined> } })
        .process?.env?.["NODE_ENV"]
    : undefined;

export const isDevelopment = nodeEnv === "development" || nodeEnv === "test";
