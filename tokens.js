// status can be "online", "idle", "dnd", or "invisible" or "offline"
import 'dotenv/config';
export default [
    {
        channelId: "1210299716936409150",
        serverId: "1011820688228765828",
        token: process.env.TOKEN1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
    import 'dotenv/config';
export default [
    {
        channelId: "1548016497589362728",
        serverId: "1375161472778506382",
        token: process.env.TOKEN2,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
