//Enum
enum Environment {
    LOCAL,
    DEVELOPMENT,
    STAGING,
    PRODUCTION
}

const env = {
    [Environment.LOCAL]: "qa",
    [Environment.DEVELOPMENT]: "dev",
    [Environment.STAGING]: "preprod",
    [Environment.PRODUCTION]: "prod"
};

function runtests(e: Environment): void {
    console.log(env[Environment.LOCAL])
}

runtests(Environment.LOCAL)


