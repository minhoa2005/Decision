import { defaultConfig } from '@tamagui/config/v5'
import { createTamagui } from 'tamagui'
import { createAnimations } from '@tamagui/animations-react-native'

export const config = createTamagui({
    ...defaultConfig,
    themes: {
        ...defaultConfig.themes,
        dark: {
            ...defaultConfig.themes.dark,
            background: '#000',
            color: '#fff',
        },
        light: {
            ...defaultConfig.themes.light,
            background: '#fff',
            color: '#000',
        },
        dark_pink: {
            ...defaultConfig.themes.dark,
            background: '#610c62',
            color: '#f17efc',
        },
        light_pink: {
            ...defaultConfig.themes.light,
            background: '#f17efc',
            color: '#610c62',
        },
    },
    animations: createAnimations({
        fast: {
            damping: 20,
            mass: 1.2,
            stiffness: 250,
        },
        medium: {
            damping: 10,
            mass: 0.9,
            stiffness: 100,
        },
        slow: {
            damping: 20,
            stiffness: 60,
        },
    }),
    media: {
        ...defaultConfig.media,
        // add your own media queries here, if wanted
    },
})

type OurConfig = typeof config

declare module 'tamagui' {
    interface TamaguiCustomConfig extends OurConfig { }
}