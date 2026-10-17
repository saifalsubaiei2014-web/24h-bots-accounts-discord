// status can be "online", "idle", "dnd", or "invisible" or "offline"
import 'dotenv/config';
export default [
    {
        channelId: "1548016487027970089",
        serverId: "1375161472778506382",
        token: process.env.MTU1ODc5OTI0MzYyNjQxODI3Nw.GoS1Wr.4vURNQaANKufHSr6N3vWziCci-caphK2QFq85U,
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
