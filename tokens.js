// status can be "online", "idle", "dnd", or "invisible" or "offline"
import 'dotenv/config';
export default [
    {
        channelId: "1548016489834217602",
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
];
