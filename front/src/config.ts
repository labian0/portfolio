interface Config {
    ENABLE_REGISTER: string
}

const config:Config = {
    ENABLE_REGISTER: "true"
} 


export const enableRegister = config.ENABLE_REGISTER === "true"